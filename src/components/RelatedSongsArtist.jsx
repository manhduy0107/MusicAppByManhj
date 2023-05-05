import SongBarArtist from './SongBarArtist';

const RelatedSongsArtist = ({
  data,
  isPlaying,
  activeSong,
  handlePauseClick,
  handlePlayClick,
  artistId,
}) => (
  <div className="flex flex-col">
    <h1 className="font-bold text-3xl text-white">Bài hát cùng thể loại: </h1>
    <div className="mt-6 w-full flex flex-col">
      {data?.map((song, i) => (
        <SongBarArtist
          key={i}
          song={song}
          i={i}
          artistId={artistId}
          isPlaying={isPlaying}
          activeSong={activeSong}
          handlePauseClick={handlePauseClick}
          handlePlayClick={handlePlayClick}
        />
      ))}
    </div>
  </div>
);

export default RelatedSongsArtist;
