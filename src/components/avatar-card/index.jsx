import PropTypes from 'prop-types';
import { fallbackImage, skeleton } from '../../helpers/utils';
import LazyImage from '../lazy-image';

const AvatarCard = ({ profile, loading, avatarRing, resume }) => {
  return (
    <div className="card shadow-lg compact bg-base-100">
      <div className="grid place-items-center py-8">
        {loading || !profile ? (
          <div className="avatar opacity-90">
            <div className="mb-8 rounded-full w-32 h-32">
              {skeleton({
                width: 'w-full',
                height: 'h-full',
                shape: '',
              })}
            </div>
          </div>
        ) : (
          <div className="avatar opacity-90">
            <div
              className={`mb-8 rounded-full w-32 h-32 ${
                avatarRing
                  ? 'ring ring-primary ring-offset-base-100 ring-offset-2'
                  : ''
              }`}
            >
              <LazyImage
                src={profile.avatar ? profile.avatar : fallbackImage}
                alt={profile.name}
                placeholder={skeleton({
                  width: 'w-full',
                  height: 'h-full',
                  shape: '',
                })}
              />
            </div>
          </div>
        )}

        <div className="text-center mx-auto px-8">
          <h5 className="font-bold text-2xl">
            {loading || !profile ? (
              skeleton({ width: 'w-48', height: 'h-8' })
            ) : (
              <span className="text-base-content opacity-80">
                {profile.name}
              </span>
            )}
          </h5>

          <div className="mt-2">
            {loading || !profile ? (
              skeleton({ width: 'w-36', height: 'h-5' })
            ) : (
              profile.title && (
                <p className="text-sm font-semibold text-primary">
                  {profile.title}
                </p>
              )
            )}
          </div>

          <div className="mt-4 text-base-content text-opacity-70 text-sm leading-relaxed">
            {loading || !profile ? (
              <>
                {skeleton({ width: 'w-56', height: 'h-4', className: 'mb-2' })}
                {skeleton({ width: 'w-48', height: 'h-4' })}
              </>
            ) : (
              profile.bio
            )}
          </div>

          {!loading && profile?.company && (
            <div className="mt-4 text-xs text-base-content text-opacity-60">
              Currently at{' '}
              <span className="font-semibold text-base-content text-opacity-80">
                {profile.company}
              </span>
            </div>
          )}

          {!loading && profile?.location && (
            <div className="mt-1 text-xs text-base-content text-opacity-50">
              {profile.location}
            </div>
          )}
        </div>

        {resume?.fileUrl &&
          (loading ? (
            <div className="mt-6">
              {skeleton({ width: 'w-40', height: 'h-8' })}
            </div>
          ) : (
            <a
              href={resume.fileUrl}
              target="_blank"
              className="btn btn-outline btn-sm text-xs mt-6 opacity-70"
              download
              rel="noreferrer"
            >
              Download Resume
            </a>
          ))}
      </div>
    </div>
  );
};

AvatarCard.propTypes = {
  profile: PropTypes.shape({
    avatar: PropTypes.string,
    name: PropTypes.string,
    title: PropTypes.string,
    bio: PropTypes.string,
    company: PropTypes.string,
    location: PropTypes.string,
  }),
  loading: PropTypes.bool.isRequired,
  avatarRing: PropTypes.bool.isRequired,
  resume: PropTypes.shape({
    fileUrl: PropTypes.string,
  }),
};

export default AvatarCard;