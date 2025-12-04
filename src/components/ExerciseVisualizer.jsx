import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, Pause, RotateCcw, ChevronRight, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function ExerciseVisualizer({ exercise }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentPhase, setCurrentPhase] = useState(0);

    const animation = exercise.animation || [];

    useEffect(() => {
        if (!isPlaying || animation.length === 0) return;

        const phase = animation[currentPhase];
        const timer = setTimeout(() => {
            setCurrentPhase((prev) => (prev + 1) % animation.length);
        }, phase.duration);

        return () => clearTimeout(timer);
    }, [isPlaying, currentPhase, animation]);

    const togglePlay = () => setIsPlaying(!isPlaying);

    const reset = () => {
        setIsPlaying(false);
        setCurrentPhase(0);
    };

    return (
        <div className="mb-12 space-y-6">
            {/* Section Header */}
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-black text-white tracking-tight">
                    MOVEMENT ANIMATION
                </h3>
            </div>

            {/* Animation Stage */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 overflow-hidden">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `
                            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                        `,
                        backgroundSize: '30px 30px'
                    }} />
                </div>

                {/* Phase Display */}
                <div className="relative">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentPhase}
                            initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
                            animate={{ opacity: 1, scale: 1, rotateY: 0 }}
                            exit={{ opacity: 0, scale: 0.9, rotateY: 20 }}
                            transition={{ duration: 0.4 }}
                            className="text-center"
                        >
                            {/* Character Animation */}
                            <div className="relative inline-block mb-8">
                                {/* Glow Effect */}
                                <motion.div
                                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-purple-500/30 rounded-full blur-3xl"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [0.3, 0.5, 0.3]
                                    }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                />

                                {/* Character */}
                                <motion.div
                                    className="relative text-9xl"
                                    animate={{
                                        y: currentPhase === 1 || currentPhase === 2 ? 40 : 0,
                                        scale: currentPhase === 2 ? 0.95 : 1,
                                        rotate: [0, -2, 2, 0]
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        rotate: { duration: 2, repeat: Infinity }
                                    }}
                                >
                                    {exercise.image}
                                </motion.div>
                            </div>

                            {/* Phase Info Card */}
                            <motion.div
                                initial={{ y: 20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                className="inline-block bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-8 py-4"
                            >
                                <div className="flex items-center gap-3 mb-2">
                                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500/30 to-blue-600/30 rounded-lg flex items-center justify-center">
                                        <span className="text-cyan-400 font-black text-sm">
                                            {currentPhase + 1}
                                        </span>
                                    </div>
                                    <span className="text-gray-400 font-bold text-sm uppercase tracking-wider">
                                        Phase {currentPhase + 1} of {animation.length}
                                    </span>
                                </div>
                                <p className="text-white font-bold text-lg">
                                    {animation[currentPhase]?.phase}
                                </p>
                            </motion.div>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Timeline */}
                <div className="relative mt-12 flex items-center justify-center gap-2">
                    {animation.map((phase, index) => (
                        <motion.button
                            key={index}
                            onClick={() => {
                                setCurrentPhase(index);
                                setIsPlaying(false);
                            }}
                            className="relative group"
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            {/* Connection Line */}
                            {index < animation.length - 1 && (
                                <div className={`absolute left-full top-1/2 w-8 h-0.5 -translate-y-1/2 transition-all duration-300 ${
                                    index < currentPhase
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                                        : 'bg-white/10'
                                }`} />
                            )}

                            {/* Dot */}
                            <div className={`relative w-4 h-4 rounded-full transition-all duration-300 ${
                                index === currentPhase
                                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 scale-125'
                                    : index < currentPhase
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                                        : 'bg-white/20'
                            }`}>
                                {/* Active Pulse */}
                                {index === currentPhase && (
                                    <motion.div
                                        className="absolute inset-0 rounded-full bg-cyan-500"
                                        animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                        transition={{ duration: 1.5, repeat: Infinity }}
                                    />
                                )}
                            </div>

                            {/* Tooltip */}
                            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <div className="bg-black/90 text-white text-xs font-bold px-3 py-1.5 rounded-lg whitespace-nowrap">
                                    {phase.phase}
                                </div>
                            </div>
                        </motion.button>
                    ))}
                </div>
            </div>

            {/* Controls */}
            <div className="flex items-center justify-center gap-4">
                <motion.button
                    onClick={togglePlay}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-black text-white text-lg shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transition-all"
                >
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="relative flex items-center gap-3">
                        {isPlaying ? (
                            <>
                                <Pause className="w-5 h-5" />
                                <span>PAUSE</span>
                            </>
                        ) : (
                            <>
                                <Play className="w-5 h-5" />
                                <span>PLAY</span>
                            </>
                        )}
                    </div>
                </motion.button>

                <motion.button
                    onClick={reset}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group relative flex items-center gap-3 px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl font-bold text-white hover:bg-white/20 hover:border-white/30 transition-all"
                >
                    <RotateCcw className="w-5 h-5" />
                    <span>RESET</span>
                </motion.button>
            </div>

            {/* Posture Comparison */}
            <div className="space-y-4">
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-purple-400" />
                    </div>
                    <h4 className="text-2xl font-black text-white tracking-tight">
                        KEY POSITIONS
                    </h4>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* Good Posture */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-green-500/30 rounded-2xl p-6 hover:border-green-500/50 transition-all">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-green-500/20 to-emerald-600/20 border border-green-500/30 rounded-2xl flex items-center justify-center text-5xl mb-4">
                                <CheckCircle2 className="w-10 h-10 text-green-400" />
                            </div>

                            {/* Title */}
                            <div className="flex items-center gap-2 mb-4">
                                <h5 className="text-xl font-black text-green-400 uppercase tracking-tight">
                                    Correct Form
                                </h5>
                            </div>

                            {/* Points */}
                            <ul className="space-y-3">
                                {['Straight back alignment', 'Knees properly tracked', 'Weight evenly distributed'].map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 font-medium text-sm">
                                            {point}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>

                    {/* Bad Posture */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="relative group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
                        <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-red-500/30 rounded-2xl p-6 hover:border-red-500/50 transition-all">
                            {/* Icon */}
                            <div className="w-20 h-20 bg-gradient-to-br from-red-500/20 to-orange-600/20 border border-red-500/30 rounded-2xl flex items-center justify-center text-5xl mb-4">
                                <AlertCircle className="w-10 h-10 text-red-400" />
                            </div>

                            {/* Title */}
                            <div className="flex items-center gap-2 mb-4">
                                <h5 className="text-xl font-black text-red-400 uppercase tracking-tight">
                                    Avoid These
                                </h5>
                            </div>

                            {/* Points */}
                            <ul className="space-y-3">
                                {['Rounded back position', 'Knees caving inward', 'Unbalanced weight shift'].map((point, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: 10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-start gap-3"
                                    >
                                        <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-300 font-medium text-sm">
                                            {point}
                                        </span>
                                    </motion.li>
                                ))}
                            </ul>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
