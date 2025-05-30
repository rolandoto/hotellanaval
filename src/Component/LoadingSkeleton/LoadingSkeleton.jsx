import ContentLoader from "react-content-loader";

const LoadingSkeleton =(props) =>{

    return (   <div className="bg-gray-100 w-full">
      <div className="mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((_, i) => (
          <div key={i} className="bg-white rounded-xl shadow p-4 w-full">
            <ContentLoader 
              speed={2}
              className="w-full h-full"
              viewBox="0 0 400 440"
              backgroundColor="#f3f3f3"
              foregroundColor="#e0e0e0"
              {...props}
            >
              <rect x="0" y="0" rx="10" ry="10" width="100%" height="200" />
              <rect x="10" y="215" rx="4" ry="4" width="50" height="16" />
              <rect x="70" y="215" rx="4" ry="4" width="50" height="16" />
              <rect x="10" y="245" rx="6" ry="6" width="240" height="20" />
              <rect x="10" y="275" rx="4" ry="4" width="220" height="12" />
              <rect x="10" y="295" rx="4" ry="4" width="200" height="12" />
              <rect x="10" y="315" rx="4" ry="4" width="180" height="12" />
              <rect x="10" y="340" rx="4" ry="4" width="80" height="14" />
              <rect x="10" y="370" rx="4" ry="4" width="300" height="12" />
              <rect x="10" y="390" rx="4" ry="4" width="260" height="12" />
              <rect x="10" y="275" rx="4" ry="4" width="220" height="12" />
              <rect x="10" y="295" rx="4" ry="4" width="200" height="12" />
              <rect x="10" y="315" rx="4" ry="4" width="180" height="12" />
              <rect x="10" y="340" rx="4" ry="4" width="80" height="14" />
              <rect x="10" y="370" rx="4" ry="4" width="300" height="12" />
            </ContentLoader>
          </div>
        ))}
      </div>
    </div>
    )

}

export default LoadingSkeleton