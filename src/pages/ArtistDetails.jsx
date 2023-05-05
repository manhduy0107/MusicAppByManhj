import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Error, Loader } from '../components';

import { useGetArtistDetailsQuery } from '../redux/shazamAPI/shazamCore';
import DetailsHeaderArtist from '../components/DetailsHeaderArtist';
import RelatedSongsArtist from '../components/RelatedSongsArtist';

const ArtistDetails = () => {
  const { id: artistId } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistId);

  if (isFetchingArtistDetails) return <Loader title="Đang tải thông tin ca sĩ" />;
  const artistDatas = artistData?.data[0].views['top-songs']?.data;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <DetailsHeaderArtist artistId={artistId} artistData={artistData} />
      <RelatedSongsArtist
        data={artistDatas}
        artistId={artistId}
        isPlaying={isPlaying}
        activeSong={activeSong}
      />
    </div>
  );
};

export default ArtistDetails;
