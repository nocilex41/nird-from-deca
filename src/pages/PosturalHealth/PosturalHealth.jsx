import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Activity, Target, Zap, TrendingUp, ArrowRight, ChevronLeft, Shield, Award } from 'lucide-react';
import ProfileQCM from '../../components/ProfileQCM';
import ExerciseInstructions from '../../components/ExerciseInstructions';
import ExerciseVisualizer from '../../components/ExerciseVisualizer';
import ProductRecommendations from '../../components/ProductRecommendations';
import { exercises } from '../../../data/exercises';

export default function PosturalHealth() {
    const [step, setStep] = useState('intro');
    const [userProfile, setUserProfile] = useState(null);
    const [selectedExercise, setSelectedExercise] = useState(null);

    const handleProfileComplete = (answers) => {
        setUserProfile(answers);
        setStep('selection');
    };

    const handleExerciseSelect = (exerciseKey) => {
        setSelectedExercise(exerciseKey);
        setStep('exercise');
    };

    const resetApp = () => {
        setStep('intro');
        setUserProfile(null);
        setSelectedExercise(null);
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            {/* Header Athletic */}
            <header className="relative bg-black/30 backdrop-blur-md border-b border-white/10 sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-20">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center">
                                <Activity className="w-6 h-6 text-white" />
                            </div>
                            <div>
                                <h1 className="text-2xl font-black text-white tracking-tight">
                                    POSTURE<span className="text-cyan-400">PRO</span>
                                </h1>
                                <p className="text-xs text-gray-400 font-medium tracking-wide">PERFORMANCE TRAINING</p>
                            </div>
                        </div>

                        {step !== 'intro' && (
                            <button
                                onClick={resetApp}
                                className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-semibold text-sm transition-all duration-300 flex items-center gap-2"
                            >
                                <ChevronLeft className="w-4 h-4" />
                                Restart
                            </button>
                        )}
                    </div>
                </div>
            </header>

            <AnimatePresence mode="wait">
                {/* INTRO - Athletic Landing */}
                {step === 'intro' && (
                    <motion.div
                        key="intro"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="relative"
                    >
                        {/* Hero Section */}
                        <div className="relative overflow-hidden">
                            {/* Background Pattern */}
                            <div className="absolute inset-0 opacity-10">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,.03) 2px, rgba(255,255,255,.03) 4px)`
                                }} />
                            </div>

                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                                {/* Main Content */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                    className="text-center mb-16"
                                >
                                    <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                                        <Shield className="w-4 h-4 text-cyan-400" />
                                        <span className="text-cyan-400 text-sm font-bold tracking-wider">PRÉVENTION DES BLESSURES</span>
                                    </div>

                                    <h2 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                                        LE SPORT EN TOUTE SÉCURITÉ,
                                        <br />
                                        <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                                            PERFORMER MIEUX
                                        </span>
                                    </h2>

                                    <p className="text-xl text-gray-400 max-w-2xl mx-auto font-medium leading-relaxed">
                                        Maîtrisez la bonne technique, prévenez les blessures et libérez votre potentiel athlétique grâce à un accompagnement personnalisé.
                                    </p>
                                </motion.div>

                                {/* Stats Bar */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.4 }}
                                    className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16 max-w-4xl mx-auto"
                                >
                                    <div className="bg-gradient-to-br from-red-500/10 to-red-600/5 border border-red-500/20 rounded-2xl p-6 text-center">
                                        <div className="text-4xl font-black text-red-400 mb-2">80%</div>
                                        <div className="text-sm text-gray-400 font-semibold">Blessures sportives dues à une mauvaise posture</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-cyan-500/10 to-cyan-600/5 border border-cyan-500/20 rounded-2xl p-6 text-center">
                                        <div className="text-4xl font-black text-cyan-400 mb-2">100%</div>
                                        <div className="text-sm text-gray-400 font-semibold">Évitable grâce à une technique appropriée</div>
                                    </div>
                                    <div className="bg-gradient-to-br from-purple-500/10 to-purple-600/5 border border-purple-500/20 rounded-2xl p-6 text-center">
                                        <div className="text-4xl font-black text-purple-400 mb-2">24/7</div>
                                        <div className="text-sm text-gray-400 font-semibold">Coaching assisté par l'IA</div>
                                    </div>
                                </motion.div>

                                {/* Features Grid */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 }}
                                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
                                >
                                    {[
                                        { icon: Target, title: 'PERSONALIZED PROFILE', desc: 'Adaptive assessment system', color: 'cyan' },
                                        { icon: Activity, title: 'STEP-BY-STEP GUIDE', desc: 'Detailed movement breakdown', color: 'blue' },
                                        { icon: Zap, title: 'VISUAL FEEDBACK', desc: 'Real-time form analysis', color: 'purple' },
                                        { icon: Award, title: 'SMART EQUIPMENT', desc: 'Curated gear recommendations', color: 'pink' }
                                    ].map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300"
                                        >
                                            <div className={`w-12 h-12 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-600/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                                <feature.icon className={`w-6 h-6 text-${feature.color}-400`} />
                                            </div>
                                            <h3 className="text-white font-black text-sm mb-2 tracking-wide">{feature.title}</h3>
                                            <p className="text-gray-400 text-xs font-medium leading-relaxed">{feature.desc}</p>
                                        </div>
                                    ))}
                                </motion.div>

                                {/* CTA Button */}
                                <motion.div
                                    initial={{ y: 30, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8 }}
                                    className="text-center"
                                >
                                    <button
                                        onClick={() => setStep('qcm')}
                                        className="group relative inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-white font-bold text-lg hover:shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-105"
                                    >
                                        <span>START ASSESSMENT</span>
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                    <p className="text-gray-500 text-sm mt-4 font-medium">No equipment needed • 5 minutes</p>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                )}

                {/* QCM */}
                {step === 'qcm' && (
                    <motion.div
                        key="qcm"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        className="py-12"
                    >
                        <ProfileQCM onComplete={handleProfileComplete} />
                    </motion.div>
                )}

                {/* EXERCISE SELECTION */}
                {step === 'selection' && (
                    <motion.div
                        key="selection"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                    >
                        <div className="text-center mb-12">
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight">
                                SELECT YOUR
                                <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    TRAINING MOVE
                                </span>
                            </h2>
                            <p className="text-gray-400 text-lg font-medium">Choose the exercise you want to master</p>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {Object.entries(exercises).map(([key, exercise]) => (
                                <motion.div
                                    key={key}
                                    onClick={() => handleExerciseSelect(key)}
                                    whileHover={{ scale: 1.02, y: -4 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group relative bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm border border-white/10 rounded-2xl p-6 cursor-pointer hover:border-cyan-500/50 transition-all duration-300 overflow-hidden"
                                >
                                    {/* Hover Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-600/0 group-hover:from-cyan-500/10 group-hover:to-blue-600/10 transition-all duration-300" />

                                    <div className="relative">
                                        <div className="text-5xl mb-4">{exercise.image}</div>
                                        <h3 className="text-xl font-black text-white mb-2 tracking-tight">{exercise.name}</h3>
                                        <div className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-3">
                                            <span className="text-cyan-400 text-xs font-bold tracking-wider uppercase">{exercise.category}</span>
                                        </div>
                                        <div className="flex flex-wrap gap-2">
                                            {exercise.targetMuscles.slice(0, 2).map((muscle, idx) => (
                                                <span key={idx} className="text-xs text-gray-400 font-medium px-2 py-1 bg-white/5 rounded">
                                                    {muscle}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="mt-4 flex items-center text-cyan-400 font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                                            <span>Start training</span>
                                            <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* EXERCISE DETAIL */}
                {step === 'exercise' && selectedExercise && (
                    <motion.div
                        key="exercise"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
                    >
                        <button
                            onClick={() => setStep('selection')}
                            className="mb-8 flex items-center gap-2 px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white font-semibold transition-all duration-300"
                        >
                            <ChevronLeft className="w-4 h-4" />
                            Back to exercises
                        </button>

                        <ExerciseInstructions
                            profile={userProfile}
                            selectedExercise={selectedExercise}
                        />

                        <ExerciseVisualizer
                            exercise={exercises[selectedExercise]}
                        />

                        <ProductRecommendations profile={userProfile} />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
