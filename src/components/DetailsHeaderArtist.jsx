import { Link } from 'react-router-dom';

const DetailsHeaderArtist = ({ artistId, artistData, songData }) => (
  <div className="relative w-full flex flex-col">
    <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28">
      <div className="absolute inset-0 flex items-center">
        <img
          alt="art"
          src={`${artistData.data[0].avatar}`}
          className="sm:w-48 w-28 sm:h-48 h-28 rounded-fill object-cover border-2 shadow-xl shadow-black"
        />

        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">
            {artistData.data[0].attributes?.name}
          </p>
          {!artistId && (
          <Link to={`/artists/${songData?.artists[0].adamid}`}>
            <p className="text-base text-orange-700 mt-2">thử nghiệm</p>
          </Link>
          )}
          <p className="text-base text-orange-700 mt-2">
            {artistData.data[0].attributes?.origin}
          </p>
        </div>
      </div>

      <div className="w-full sm:h-44 h-24" />
    </div>
  </div>
);

export default DetailsHeaderArtist;
