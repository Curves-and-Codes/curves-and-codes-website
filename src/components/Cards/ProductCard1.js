const ProductCard1 = ({ title, description, image, category }) => {
  return (
    <div className="mx-3">
      <div className="bg-[var(--card-background)] backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl hover:shadow-[var(--shadow-glow-secondary)] transition-all duration-300 hover:scale-105 border border-gray-700/50">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={image || "/placeholder.svg?height=200&width=400&query=futuristic AI technology"}
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--brand-primary)]/80 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-2">
            <span className="text-xs font-semibold text-[var(--brand-secondary)] uppercase tracking-wider">
              {category}
            </span>
          </div>
          <h3 className="text-xl font-bold text-white mb-3 leading-tight">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed mb-4">{description}</p>
          <div className="flex items-center justify-between">
            {/* <button className="text-[var(--brand-secondary)] hover:text-[var(--brand-secondary)]/80 font-semibold text-sm transition-colors duration-200">
              Learn More →
            </button> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard1
