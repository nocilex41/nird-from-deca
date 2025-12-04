import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ChevronLeft, CheckCircle2, Circle } from 'lucide-react';
import { questions } from '../../data/questions.js';

export default function ProfileQCM({ onComplete }) {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState({});

    const question = questions[currentQuestion];
    const isLastQuestion = currentQuestion === questions.length - 1;
    const canProgress = answers[question.id];

    const handleAnswer = (value) => {
        if (question.multiple) {
            const current = answers[question.id] || [];
            const updated = current.includes(value)
                ? current.filter(v => v !== value)
                : [...current, value];
            setAnswers({ ...answers, [question.id]: updated });
        } else {
            setAnswers({ ...answers, [question.id]: value });
        }
    };

    const handleNext = () => {
        if (isLastQuestion) {
            onComplete(answers);
        } else {
            setCurrentQuestion(prev => prev + 1);
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(prev => prev - 1);
        }
    };

    const isSelected = (value) => {
        if (question.multiple) {
            return (answers[question.id] || []).includes(value);
        }
        return answers[question.id] === value;
    };

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Progress Section */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-4"
            >
                {/* Progress Bar */}
                <div className="relative h-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full overflow-hidden">
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full shadow-lg shadow-cyan-500/50"
                    />

                    {/* Glow Effect */}
                    <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${progress}%` }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full blur-md opacity-50"
                    />
                </div>

                {/* Progress Text */}
                <div className="flex items-center justify-between">
                    <span className="text-gray-400 font-bold text-sm">
                        Question {currentQuestion + 1} / {questions.length}
                    </span>
                    <span className="text-cyan-400 font-black text-sm">
                        {Math.round(progress)}% Complete
                    </span>
                </div>

                {/* Question Indicators */}
                <div className="flex items-center gap-2">
                    {questions.map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.05 }}
                            className="relative flex-1 h-1.5 rounded-full overflow-hidden"
                        >
                            <div className={`absolute inset-0 transition-all duration-300 ${
                                index < currentQuestion
                                    ? 'bg-gradient-to-r from-green-500 to-emerald-600'
                                    : index === currentQuestion
                                        ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                                        : 'bg-white/10'
                            }`} />
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Question Card */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentQuestion}
                    initial={{ opacity: 0, x: 50, scale: 0.95 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    exit={{ opacity: 0, x: -50, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    className="relative"
                >
                    {/* Glow Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-600/10 rounded-3xl blur-2xl" />

                    {/* Card Content */}
                    <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 rounded-3xl p-8 md:p-12 space-y-8">
                        {/* Question Number Badge */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 rounded-xl"
                        >
                            <span className="text-cyan-400 font-black text-sm uppercase tracking-wider">
                                Question {currentQuestion + 1}
                            </span>
                        </motion.div>

                        {/* Question Title */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-3xl md:text-4xl font-black text-white leading-tight"
                        >
                            {question.question}
                        </motion.h2>

                        {/* Multiple Choice Info */}
                        {question.multiple && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg w-fit"
                            >
                                <CheckCircle2 className="w-4 h-4 text-purple-400" />
                                <span className="text-purple-400 font-bold text-sm">
                                    Multiple selections allowed
                                </span>
                            </motion.div>
                        )}

                        {/* Options Grid */}
                        <div className="grid sm:grid-cols-2 gap-4">
                            {question.options.map((option, index) => {
                                const selected = isSelected(option.value);

                                return (
                                    <motion.button
                                        key={option.value}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.3 + index * 0.1 }}
                                        onClick={() => handleAnswer(option.value)}
                                        whileHover={{ scale: 1.02, y: -4 }}
                                        whileTap={{ scale: 0.98 }}
                                        className={`relative group ${
                                            selected
                                                ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border-cyan-500/50'
                                                : 'bg-white/5 border-white/10 hover:border-white/30'
                                        } backdrop-blur-sm border-2 rounded-2xl p-6 transition-all duration-300`}
                                    >
                                        {/* Glow on Selected */}
                                        {selected && (
                                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 rounded-2xl blur-xl" />
                                        )}

                                        {/* Content */}
                                        <div className="relative flex items-center gap-4">
                                            {/* Icon */}
                                            <div className={`text-5xl ${selected ? 'scale-110' : 'group-hover:scale-110'} transition-transform`}>
                                                {option.icon}
                                            </div>

                                            {/* Label */}
                                            <div className="flex-1 text-left">
                                                <span className={`font-black text-lg ${
                                                    selected ? 'text-cyan-400' : 'text-white group-hover:text-cyan-400'
                                                } transition-colors`}>
                                                    {option.label}
                                                </span>
                                            </div>

                                            {/* Check Indicator */}
                                            <div className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                                                selected
                                                    ? 'bg-cyan-500 border-cyan-400 scale-110'
                                                    : 'border-white/30 group-hover:border-cyan-400'
                                            }`}>
                                                {selected ? (
                                                    <CheckCircle2 className="w-4 h-4 text-white" />
                                                ) : (
                                                    <Circle className="w-3 h-3 text-white/50 group-hover:text-cyan-400" />
                                                )}
                                            </div>
                                        </div>
                                    </motion.button>
                                );
                            })}
                        </div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex items-center justify-between gap-4"
            >
                {/* Previous Button */}
                <motion.button
                    onClick={handlePrevious}
                    disabled={currentQuestion === 0}
                    whileHover={currentQuestion > 0 ? { scale: 1.05, x: -5 } : {}}
                    whileTap={currentQuestion > 0 ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 px-6 py-3 rounded-xl font-bold transition-all ${
                        currentQuestion === 0
                            ? 'bg-white/5 text-gray-600 cursor-not-allowed'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20 hover:border-white/30'
                    }`}
                >
                    <ChevronLeft className="w-5 h-5" />
                    <span>Previous</span>
                </motion.button>

                {/* Next/Finish Button */}
                <motion.button
                    onClick={handleNext}
                    disabled={!canProgress}
                    whileHover={canProgress ? { scale: 1.05, x: 5 } : {}}
                    whileTap={canProgress ? { scale: 0.95 } : {}}
                    className={`flex items-center gap-2 px-8 py-3 rounded-xl font-black uppercase tracking-wide transition-all ${
                        !canProgress
                            ? 'bg-gray-600 text-gray-400 cursor-not-allowed'
                            : isLastQuestion
                                ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg shadow-green-500/25 hover:shadow-green-500/40'
                                : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40'
                    }`}
                >
                    <span>{isLastQuestion ? 'Finish' : 'Next'}</span>
                    {isLastQuestion ? (
                        <CheckCircle2 className="w-5 h-5" />
                    ) : (
                        <ChevronRight className="w-5 h-5" />
                    )}
                </motion.button>
            </motion.div>
        </div>
    );
}
