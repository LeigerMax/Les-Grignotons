export default function AnimalWarning() {
  return (
    <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-lg shadow-sm">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg
            className="h-6 w-6 text-amber-500"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="2"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
        <div className="ml-4">
          <h3 className="text-lg font-bold text-amber-900 mb-2">
            Information importante
          </h3>
          <p className="text-amber-800 leading-relaxed">
            Un animal n'est pas un jouet. L'achat ou l'adoption d'un animal se fait en pleine conscience des responsabilités qui incombent à son nouveau propriétaire. L'abandon d'un animal constitue une infraction susceptible de poursuites pénales ou administratives.
          </p>
        </div>
      </div>
    </div>
  )
}
