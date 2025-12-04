export const exercises = {
    squat: {
        name: "Squat",
        category: "musculation",
        difficulty: ["debutant", "intermediaire", "avance"],
        targetMuscles: ["Quadriceps", "Fessiers", "Ischio-jambiers"],
        image: "🏋️‍♂️",
        instructions: {
            debutant: [
                "Position de départ : Pieds écartés largeur des épaules",
                "Regard droit devant vous, poitrine sortie",
                "Descendez lentement en poussant les fesses vers l'arrière",
                "Gardez les genoux alignés avec les pieds (ne dépassent pas les orteils)",
                "Descendez jusqu'à ce que les cuisses soient parallèles au sol",
                "Remontez en poussant sur les talons",
                "Répétez 3 séries de 10 répétitions"
            ],
            intermediaire: [
                "Ajoutez une barre légère sur les trapèzes (pas sur la nuque)",
                "Descendez plus profondément (en dessous du parallèle)",
                "Maintenez une vitesse contrôlée : 3 sec descente, 1 sec montée",
                "4 séries de 12 répétitions",
                "Temps de repos : 90 secondes"
            ],
            avance: [
                "Squat complet (ATG - Ass To Grass)",
                "Ajoutez des charges progressives",
                "Variantes : Front squat, Bulgarian split squat",
                "5 séries de 15 répétitions",
                "Intégrez des pauses en bas du mouvement (pause squat)"
            ]
        },
        warnings: {
            dos: "⚠️ Gardez le dos bien droit, ne vous penchez pas trop en avant",
            genoux: "⚠️ Commencez sans charge, focus sur l'amplitude réduite",
            epaules: "✅ Pas de contrainte particulière pour cet exercice"
        },
        tips: [
            "💡 Échauffez-vous 5-10 min avant de commencer",
            "💡 La respiration : inspirez en descendant, expirez en montant",
            "💡 Gardez toujours les talons au sol",
            "💡 Filmez-vous pour vérifier votre posture"
        ],
        animation: [
            { phase: "Position initiale", duration: 1000 },
            { phase: "Descente contrôlée", duration: 2000 },
            { phase: "Position basse", duration: 500 },
            { phase: "Remontée explosive", duration: 1000 },
            { phase: "Position finale", duration: 500 }
        ]
    },

    pompe: {
        name: "Pompes",
        category: "musculation",
        difficulty: ["debutant", "intermediaire", "avance"],
        targetMuscles: ["Pectoraux", "Triceps", "Épaules", "Gainage"],
        image: "💪",
        instructions: {
            debutant: [
                "Commencez sur les genoux (pompes sur genoux)",
                "Mains écartées largeur des épaules",
                "Corps aligné des genoux à la tête",
                "Descendez en contrôlant jusqu'à ce que la poitrine touche presque le sol",
                "Remontez en poussant fort",
                "3 séries de 8 répétitions"
            ],
            intermediaire: [
                "Pompes classiques sur les pieds",
                "Corps parfaitement aligné (planche)",
                "Coudes à 45° du corps (pas écartés à 90°)",
                "Descendez jusqu'à 5cm du sol",
                "4 séries de 15 répétitions"
            ],
            avance: [
                "Pompes déclinées (pieds surélevés)",
                "Pompes diamant (mains rapprochées)",
                "Pompes claquées pour l'explosivité",
                "5 séries de 20 répétitions",
                "Ajoutez un gilet lesté"
            ]
        },
        warnings: {
            dos: "⚠️ Maintenez un gainage parfait, ne creusez pas le dos",
            epaules: "⚠️ Ne descendez pas trop bas, gardez les coudes près du corps",
            genoux: "✅ Pas de contrainte particulière"
        },
        tips: [
            "💡 Serrez les abdos pendant tout le mouvement",
            "💡 Respirez : inspirez en descendant, expirez en montant",
            "💡 Gardez la tête neutre (regardez le sol)",
            "💡 Qualité > Quantité : mieux vaut 5 pompes parfaites que 20 mal faites"
        ],
        animation: [
            { phase: "Position haute (planche)", duration: 1000 },
            { phase: "Descente", duration: 1500 },
            { phase: "Position basse", duration: 500 },
            { phase: "Remontée", duration: 1000 }
        ]
    },

    planche: {
        name: "Planche (Gainage)",
        category: "fitness",
        difficulty: ["debutant", "intermediaire", "avance"],
        targetMuscles: ["Abdominaux", "Lombaires", "Épaules"],
        image: "🧘‍♂️",
        instructions: {
            debutant: [
                "Position sur les avant-bras et genoux",
                "Coudes sous les épaules",
                "Corps aligné",
                "Serrez les abdos et les fessiers",
                "Maintenez 30 secondes",
                "3 séries"
            ],
            intermediaire: [
                "Planche sur avant-bras, pieds tendus",
                "Corps parfaitement droit",
                "Ne levez pas les fesses",
                "Maintenez 1 minute",
                "4 séries"
            ],
            avance: [
                "Planche 2 minutes ou plus",
                "Variantes : planche latérale, planche dynamique",
                "Ajoutez un poids sur le dos",
                "5 séries de 90 secondes"
            ]
        },
        warnings: {
            dos: "⚠️ Ne creusez surtout pas le dos, gainez fort",
            epaules: "⚠️ Si douleur, passez sur les mains plutôt que les avant-bras",
            genoux: "✅ Exercice parfait pour vous"
        },
        tips: [
            "💡 Respirez normalement, ne bloquez pas",
            "💡 Contractez les fessiers pour protéger le dos",
            "💡 Regardez le sol entre vos mains",
            "💡 Mieux vaut tenir moins longtemps mais avec une posture parfaite"
        ]
    },

    chien_tete_bas: {
        name: "Chien Tête en Bas",
        category: "yoga",
        difficulty: ["debutant", "intermediaire", "avance"],
        targetMuscles: ["Dos", "Ischio-jambiers", "Épaules"],
        image: "🧘",
        instructions: {
            debutant: [
                "Démarrez à quatre pattes",
                "Mains écartées largeur des épaules",
                "Poussez sur les mains et levez les genoux du sol",
                "Les genoux peuvent rester légèrement fléchis",
                "Poussez les fesses vers le ciel",
                "Maintenez 30 secondes, 3 répétitions"
            ],
            intermediaire: [
                "Tendez complètement les jambes",
                "Talons qui touchent ou se rapprochent du sol",
                "Tête relâchée entre les bras",
                "Maintenez 1 minute, 4 répétitions"
            ],
            avance: [
                "Levez alternativement une jambe vers le ciel",
                "Maintenez 2 minutes ou plus",
                "Enchaînez avec d'autres postures (salutation au soleil)"
            ]
        },
        warnings: {
            dos: "✅ Excellente posture pour étirer le dos",
            epaules: "⚠️ Ne forcez pas, gardez les épaules détendues",
            genoux: "✅ Adaptez en pliant les genoux si besoin"
        },
        tips: [
            "💡 Respirez profondément",
            "💡 Répartissez le poids entre mains et pieds",
            "💡 Poussez le sol avec les mains",
            "💡 C'est une posture de repos en yoga"
        ]
    }
};
