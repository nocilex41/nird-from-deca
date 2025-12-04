export const questions = [
    {
        id: 1,
        question: "Quel est votre niveau sportif actuel ?",
        options: [
            { value: "debutant", label: "Débutant", icon: "🌱" },
            { value: "intermediaire", label: "Intermédiaire", icon: "💪" },
            { value: "avance", label: "Avancé", icon: "🏆" }
        ]
    },
    {
        id: 2,
        question: "Quels sports pratiquez-vous ?",
        multiple: true,
        options: [
            { value: "musculation", label: "Musculation", icon: "🏋️" },
            { value: "yoga", label: "Yoga", icon: "🧘" },
            { value: "running", label: "Course à pied", icon: "🏃" },
            { value: "fitness", label: "Fitness", icon: "💃" },
            { value: "natation", label: "Natation", icon: "🏊" }
        ]
    },
    {
        id: 3,
        question: "Quels sont vos objectifs principaux ?",
        multiple: true,
        options: [
            { value: "force", label: "Gagner en force", icon: "💪" },
            { value: "souplesse", label: "Améliorer la souplesse", icon: "🤸" },
            { value: "endurance", label: "Développer l'endurance", icon: "⏱️" },
            { value: "posture", label: "Corriger ma posture", icon: "🧍" },
            { value: "perte_poids", label: "Perdre du poids", icon: "📉" }
        ]
    },
    {
        id: 4,
        question: "Avez-vous des douleurs ou antécédents de blessures ?",
        options: [
            { value: "aucune", label: "Aucune douleur", icon: "✅" },
            { value: "dos", label: "Dos", icon: "🔴" },
            { value: "genoux", label: "Genoux", icon: "🔴" },
            { value: "epaules", label: "Épaules", icon: "🔴" },
            { value: "autre", label: "Autre", icon: "⚠️" }
        ]
    },
    {
        id: 5,
        question: "Combien de fois par semaine vous entraînez-vous ?",
        options: [
            { value: "1-2", label: "1-2 fois", icon: "📅" },
            { value: "3-4", label: "3-4 fois", icon: "📆" },
            { value: "5+", label: "5 fois ou plus", icon: "🗓️" }
        ]
    }
];
