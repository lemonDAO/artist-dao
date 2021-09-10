
import { Link } from 'react-router-dom';

export default function Policies({ dao }) {
  console.log(dao);
  return (
    <div key={dao.daoId} className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-dark-gray">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium text-indigo-600">
            <Link to="#" className="hover:underline">
              {dao.daoId}
            </Link>
          </p>
          <Link to="#" className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">{dao.config.name}</p>
            <p className="mt-3 text-base text-gray-500">{dao.config.purpose}</p>
          </Link>
        </div>
        <div>
          Council Members
          {dao.policy.roles.map(policy => (
            <div>
              <p>
                {policy.name === 'council'
                  ? policy.kind.Group.map(role => {
                      return <span>{role}</span>;
                    })
                  : ''}
              </p>
              <p>
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}