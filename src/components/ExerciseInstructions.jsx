import { motion } from 'framer-motion';
import { AlertTriangle, Target, Shield, CheckCircle2, Zap, TrendingUp } from 'lucide-react';
import { exercises } from '../../data/exercises.js';

export default function ExerciseInstructions({ profile, selectedExercise }) {
    const exercise = exercises[selectedExercise];
    const level = profile[1]; // Niveau sportif
    const injuries = profile[4]; // Blessures

    const instructions = exercise.instructions[level] || exercise.instructions.debutant;
    const warning = injuries !== 'aucune' ? exercise.warnings[injuries] : null;

    const levelColors = {
        debutant: 'from-green-500 to-emerald-600',
        intermediaire: 'from-blue-500 to-cyan-600',
        avance: 'from-purple-500 to-pink-600'
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
        >
            {/* Exercise Header */}
            <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 mb-6 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,.1) 10px, rgba(255,255,255,.1) 20px)`
                    }} />
                </div>

                <div className="relative flex items-start gap-6">
                    {/* Exercise Icon */}
                    <motion.div
                        initial={{ scale: 0, rotate: -180 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ type: "spring", duration: 0.8 }}
                        className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 backdrop-blur-sm border border-cyan-500/30 rounded-2xl flex items-center justify-center text-5xl flex-shrink-0"
                    >
                        {exercise.image}
                    </motion.div>

                    {/* Exercise Info */}
                    <div className="flex-1">
                        <h2 className="text-4xl font-black text-white mb-3 tracking-tight">
                            {exercise.name}
                        </h2>

                        <div className="flex flex-wrap items-center gap-3 mb-4">
                            {/* Level Badge */}
                            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${levelColors[level]} rounded-xl shadow-lg`}>
                                <TrendingUp className="w-4 h-4 text-white" />
                                <span className="text-white font-bold text-sm uppercase tracking-wider">
                                    {level}
                                </span>
                            </div>

                            {/* Category Badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl backdrop-blur-sm">
                                <Zap className="w-4 h-4 text-cyan-400" />
                                <span className="text-white font-bold text-sm uppercase tracking-wider">
                                    {exercise.category}
                                </span>
                            </div>
                        </div>

                        {/* Target Muscles */}
                        <div className="flex items-center gap-3 text-gray-300">
                            <div className="w-10 h-10 bg-cyan-500/10 border border-cyan-500/30 rounded-lg flex items-center justify-center">
                                <Target className="w-5 h-5 text-cyan-400" />
                            </div>
                            <div>
                                <div className="text-xs text-gray-500 font-bold uppercase tracking-wider mb-1">Target Muscles</div>
                                <div className="text-sm font-bold text-white">
                                    {exercise.targetMuscles.join(' • ')}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Warning Box */}
            {warning && (
                <motion.div
                    initial={{ scale: 0.95, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="relative bg-gradient-to-r from-red-500/10 via-orange-500/10 to-red-500/10 border-2 border-red-500/30 rounded-2xl p-6 mb-6 overflow-hidden"
                >
                    {/* Animated Border Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-red-500/0 via-red-500/20 to-red-500/0 animate-pulse" />

                    <div className="relative flex items-start gap-4">
                        <div className="w-12 h-12 bg-red-500/20 border border-red-500/40 rounded-xl flex items-center justify-center flex-shrink-0">
                            <AlertTriangle className="w-6 h-6 text-red-400" />
                        </div>
                        <div className="flex-1">
                            <h4 className="text-red-400 font-black text-sm uppercase tracking-wider mb-2">
                                Safety Alert
                            </h4>
                            <p className="text-white font-medium leading-relaxed">
                                {warning}
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}

            {/* Instructions Section */}
            <div className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-lg flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                        STEP-BY-STEP PROTOCOL
                    </h3>
                </div>

                <div className="space-y-4">
                    {instructions.map((instruction, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative"
                        >
                            <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-cyan-500/30 transition-all duration-300">
                                {/* Step Number */}
                                <div className="relative">
                                    <div className="w-10 h-10 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-lg flex items-center justify-center font-black text-cyan-400 group-hover:scale-110 transition-transform">
                                        {index + 1}
                                    </div>
                                    {index < instructions.length - 1 && (
                                        <div className="absolute top-10 left-1/2 w-0.5 h-6 bg-gradient-to-b from-cyan-500/30 to-transparent" />
                                    )}
                                </div>

                                {/* Instruction Text */}
                                <p className="flex-1 text-gray-300 font-medium leading-relaxed pt-2">
                                    {instruction}
                                </p>

                                {/* Check Icon */}
                                <CheckCircle2 className="w-5 h-5 text-cyan-400/50 group-hover:text-cyan-400 transition-colors flex-shrink-0 mt-2" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Pro Tips Section */}
            <div className="bg-gradient-to-br from-purple-500/10 via-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-8 mb-6">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg flex items-center justify-center">
                        <Zap className="w-5 h-5 text-purple-400" />
                    </div>
                    <h3 className="text-2xl font-black text-white tracking-tight">
                        PRO TIPS
                    </h3>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    {exercise.tips.map((tip, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="relative group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-600/20 rounded-xl blur-xl group-hover:blur-2xl transition-all opacity-0 group-hover:opacity-100" />
                            <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-5 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300">
                                <div className="flex items-start gap-3">
                                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500/30 to-pink-600/30 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                                        <span className="text-purple-400 font-black text-xs">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-300 font-medium text-sm leading-relaxed">
                                        {tip}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Safety Reminder */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="relative bg-gradient-to-r from-red-500/5 via-orange-500/5 to-red-500/5 border border-red-500/20 rounded-xl p-6"
            >
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-500/10 border border-red-500/30 rounded-xl flex items-center justify-center flex-shrink-0">
                        <Shield className="w-6 h-6 text-red-400" />
                    </div>
                    <div className="flex-1">
                        <h4 className="text-red-400 font-black text-sm uppercase tracking-wider mb-1">
                            Safety First
                        </h4>
                        <p className="text-gray-400 font-medium text-sm">
                            Stop immediately if you experience pain. Consult a professional if discomfort persists.
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
