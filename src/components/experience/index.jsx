import { skeleton } from '../../helpers/utils';
import PropTypes from 'prop-types';

const ExperienceCard = ({
  time,
  position,
  company,
  companyLink,
  description,
  technologies,
}) => (
  <div className="card compact bg-base-100 shadow hover:shadow-lg transition-shadow border border-base-300 border-opacity-40 w-full">
    <div className="card-body p-6 md:p-8">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2">
        <div>
          <h3 className="font-semibold text-lg text-base-content text-opacity-80">
            {position}
          </h3>

          <div className="text-sm text-base-content text-opacity-60">
            {companyLink ? (
              <a
                href={companyLink}
                target="_blank"
                rel="noreferrer"
                className="hover:underline"
              >
                {company}
              </a>
            ) : (
              company
            )}
          </div>
        </div>

        <div className="text-xs text-base-content text-opacity-50 whitespace-nowrap">
          {time}
        </div>
      </div>

      {Array.isArray(description) && description.length > 0 && (
        <ul className="mt-4 space-y-2 text-sm leading-relaxed text-base-content text-opacity-70 list-disc list-outside ml-5">
          {description.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}

      {Array.isArray(technologies) && technologies.length > 0 && (
        <div className="flex flex-wrap gap-2 mt-5">
          {technologies.map((technology, index) => (
            <span
              key={index}
              className="badge badge-outline badge-sm text-xs opacity-70"
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </div>
  </div>
);

const Experience = ({ experiences, loading }) => {
  const renderSkeleton = () => {
    return Array.from({ length: 2 }).map((_, index) => (
      <div
        className="card compact bg-base-100 shadow border border-base-300 border-opacity-40"
        key={index}
      >
        <div className="card-body p-6 md:p-8">
          {skeleton({ width: 'w-5/12', height: 'h-6', className: 'mb-2' })}
          {skeleton({ width: 'w-4/12', height: 'h-4', className: 'mb-4' })}
          {skeleton({ width: 'w-full', height: 'h-4', className: 'mb-2' })}
          {skeleton({ width: 'w-11/12', height: 'h-4', className: 'mb-2' })}
          {skeleton({ width: 'w-10/12', height: 'h-4' })}
        </div>
      </div>
    ));
  };

  if (!experiences || experiences.length === 0) {
    return null;
  }

  return (
    <div className="col-span-1 lg:col-span-2 w-full">
      <div className="grid grid-cols-2 gap-6">
        <div className="col-span-2">
          <div className="card compact bg-base-100 shadow bg-opacity-40 w-full">
            <div className="card-body p-6 md:p-8">
              <div className="mx-3 flex items-center justify-between mb-2">
                <h5 className="card-title">
                  {loading ? (
                    skeleton({ width: 'w-48', height: 'h-8' })
                  ) : (
                    <span className="text-base-content opacity-70">
                      Professional Experience
                    </span>
                  )}
                </h5>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {loading
                  ? renderSkeleton()
                  : experiences.map((experience, index) => (
                      <ExperienceCard
                        key={index}
                        time={`${experience.from} - ${experience.to}`}
                        position={experience.position}
                        company={experience.company}
                        companyLink={experience.companyLink || null}
                        description={experience.description || []}
                        technologies={experience.technologies || []}
                      />
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  time: PropTypes.node,
  position: PropTypes.node,
  company: PropTypes.node,
  companyLink: PropTypes.string,
  description: PropTypes.array,
  technologies: PropTypes.array,
};

Experience.propTypes = {
  experiences: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Experience;