import { Link } from 'react-router-dom';

export default function SingleDao({dao , index}) {
  
  return (
    <Link to={`/dao/${index}`} key={index} onClick={()=> localStorage.setItem("daoId", dao.daoId)}>
    <div  className="flex flex-col rounded-lg shadow-lg overflow-hidden border border-dark-gray">
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <p className="text-sm font-medium">{dao.daoId}</p>
          <div className="block mt-2">
            <p className="text-xl font-semibold text-gray-900">Name:{dao.config.name}</p>
            <p className="mt-3 text-base text-gray-500">Purpose: {dao.config.purpose}</p>
          </div>
        </div>
        <div className="mt-5">
          Council Members: 
          {dao.policy.roles.map(policy => (
            <div key={policy.name}>
              <p>
                {policy.name === 'council'
                  ? policy.kind.Group.map(role => {
                      return <span key={role} className="flex flex-col font-semibold">- {role}</span>;
                    })
                  : ''}
              </p>
              <p></p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </Link>
  );
}
