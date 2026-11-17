
const UserCard = ({ user }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-lg transition duration-300 p-5">

      {/* User Header */}
      <div className="flex items-center gap-4 mb-5">
        <div className="w-14 h-14 shrink-0 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-600 uppercase">
          {user.name.firstname.charAt(0)}
          {user.name.lastname.charAt(0)}
        </div>

        <div className="min-w-0">
          <h2 className="text-lg font-bold text-gray-800 capitalize truncate">
            {user.name.firstname} {user.name.lastname}
          </h2>

          <p className="text-sm text-gray-500 truncate">
            @{user.username}
          </p>
        </div>
      </div>

      {/* User Information */}
      <div className="space-y-4 border-t border-gray-100 pt-5">

        <div>
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">
            Email Address
          </p>
          <p className="text-sm text-gray-700 break-all">
            {user.email}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">
            Phone Number
          </p>
          <p className="text-sm text-gray-700">
            {user.phone}
          </p>
        </div>

        <div>
          <p className="text-xs text-gray-400 font-semibold uppercase mb-1">
            Address
          </p>
          <p className="text-sm text-gray-700 capitalize">
            {user.address.number}, {user.address.street}
          </p>
          <p className="text-sm text-gray-500 capitalize">
            {user.address.city} - {user.address.zipcode}
          </p>
        </div>

      </div>

      {/* User Footer */}
      <div className="mt-5 pt-4 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs text-gray-500">
          User ID: #{user.id}
        </span>

        <span className="px-3 py-1 bg-green-50 text-green-600 text-xs font-semibold rounded-full">
          Active
        </span>
      </div>

    </div>
  );
};

export default UserCard;
