import { ArtistCard, Error, Loader } from '../components';
import { useGetSongsByCountryQuery } from '../redux/shazamAPI/shazamCore';

const TopArtists = () => {
  const { data, isFetching, error } = useGetSongsByCountryQuery();

  if (isFetching) return <Loader title="Đang tải thông tin ca sĩ..." />;

  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <h2 className="font-bold text-3xl text-white text-left mt-4 mb-10">
        Bảng xếp hạng ca sĩ
      </h2>
      <div className="flex flex-wrap sm:justify-start justify-center gap-8">
        {data?.map((track) => (
          <ArtistCard
            key={track.key}
            track={track}
          />
        ))}
      </div>
    </div>
  );
};

export default TopArtists;
