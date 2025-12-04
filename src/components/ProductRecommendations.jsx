import { motion } from 'framer-motion';
import { ShoppingBag, ExternalLink, Star, TrendingUp, Award, Zap } from 'lucide-react';
import { products } from '../../data/products.js';

export default function ProductRecommendations({ profile }) {
    const sports = profile[2] || []; // Sports pratiqués

    // Récupérer les produits en fonction des sports
    const recommendedProducts = sports.flatMap(sport =>
        products[sport] || []
    );

    // Ajouter des produits fitness par défaut
    const allProducts = [
        ...recommendedProducts,
        ...(products.fitness || [])
    ].slice(0, 6); // Limiter à 6 produits

    return (
        <div className="mb-12 space-y-8">
            {/* Section Header */}
            <div className="relative">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden"
                >
                    {/* Background Pattern */}
                    <div className="absolute inset-0 opacity-5">
                        <div className="absolute inset-0" style={{
                            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)`,
                            backgroundSize: '40px 40px'
                        }} />
                    </div>

                    <div className="relative flex flex-col md:flex-row items-start md:items-center gap-6">
                        {/* Icon */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.8 }}
                            className="w-20 h-20 bg-gradient-to-br from-orange-500/20 to-red-600/20 backdrop-blur-sm border border-orange-500/30 rounded-2xl flex items-center justify-center flex-shrink-0"
                        >
                            <ShoppingBag className="w-10 h-10 text-orange-400" />
                        </motion.div>

                        {/* Text */}
                        <div className="flex-1">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tight">
                                RECOMMENDED GEAR
                            </h3>
                            <p className="text-gray-400 font-medium">
                                Maximize your performance with the right equipment
                            </p>
                        </div>

                        {/* Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex items-center gap-2 px-4 py-2 bg-orange-500/10 border border-orange-500/30 rounded-xl"
                        >
                            <Award className="w-5 h-5 text-orange-400" />
                            <span className="text-orange-400 font-black text-sm uppercase tracking-wide">
                                Pro Selection
                            </span>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Products Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allProducts.map((product, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -8 }}
                        className="group relative"
                    >
                        {/* Glow Effect */}
                        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-red-600/10 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                        {/* Card */}
                        <div className="relative h-full bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 group-hover:border-orange-500/30 rounded-2xl overflow-hidden transition-all duration-300">
                            {/* Product Image */}
                            <div className="relative h-48 bg-gradient-to-br from-white/5 to-transparent flex items-center justify-center text-7xl overflow-hidden">
                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <motion.div
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    {product.image}
                                </motion.div>

                                {/* Hot Badge */}
                                <motion.div
                                    initial={{ scale: 0 }}
                                    animate={{ scale: 1 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    className="absolute top-3 right-3 flex items-center gap-1 px-3 py-1.5 bg-red-500/90 backdrop-blur-sm rounded-full"
                                >
                                    <Zap className="w-3 h-3 text-white" />
                                    <span className="text-white font-black text-xs uppercase tracking-wide">
                                        Hot
                                    </span>
                                </motion.div>
                            </div>

                            {/* Product Info */}
                            <div className="p-6 space-y-4">
                                {/* Name */}
                                <h4 className="text-xl font-black text-white group-hover:text-orange-400 transition-colors line-clamp-2">
                                    {product.name}
                                </h4>

                                {/* Description */}
                                <p className="text-gray-400 font-medium text-sm line-clamp-2 leading-relaxed">
                                    {product.description}
                                </p>

                                {/* Rating */}
                                <div className="flex items-center gap-2">
                                    <div className="flex items-center gap-0.5">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className="w-4 h-4 fill-yellow-500 text-yellow-500"
                                            />
                                        ))}
                                    </div>
                                    <span className="text-gray-400 font-bold text-sm">
                                        4.5
                                    </span>
                                    <span className="text-gray-500 font-medium text-xs">
                                        (120+)
                                    </span>
                                </div>

                                {/* Footer */}
                                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                                    {/* Price */}
                                    <div>
                                        <span className="text-2xl font-black text-white">
                                            {product.price}
                                        </span>
                                    </div>

                                    {/* CTA */}
                                    <motion.a
                                        href={product.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg text-white font-bold text-sm shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 transition-all"
                                    >
                                        <span>View</span>
                                        <ExternalLink className="w-4 h-4" />
                                    </motion.a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Decathlon Banner */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                className="relative group"
            >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />

                <div className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-8">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left Side */}
                        <div className="flex items-center gap-4">
                            <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-cyan-600/20 border border-blue-500/30 rounded-xl flex items-center justify-center">
                                <Award className="w-8 h-8 text-blue-400" />
                            </div>
                            <div>
                                <div className="flex items-center gap-2 mb-1">
                                    <span className="text-blue-400 font-black text-sm uppercase tracking-wider">
                                        Official Partner
                                    </span>
                                </div>
                                <h4 className="text-2xl font-black text-white tracking-tight">
                                    DECATHLON
                                </h4>
                            </div>
                        </div>

                        {/* Right Side */}
                        <div className="flex flex-col sm:flex-row items-center gap-4">
                            <div className="flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-lg">
                                <TrendingUp className="w-5 h-5 text-green-400" />
                                <span className="text-green-400 font-bold text-sm">
                                    Free shipping over $30
                                </span>
                            </div>

                            <motion.a
                                href="https://www.decathlon.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-xl text-white font-black uppercase tracking-wide shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
                            >
                                <span>Shop Now</span>
                                <ExternalLink className="w-4 h-4" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
