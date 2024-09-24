document.addEventListener("DOMContentLoaded", function() {
    const moviesByYear={

        1970: [
            { title: "Patton", imageUrl: "image/patton.jpg", releaseDate: "1970", rated: "8.0", description: "The life and career of U.S. General George S. Patton during World War II." },
            { title: "Five Easy Pieces", imageUrl: "image/five_easy_pieces.jpg", releaseDate: "1970", rated: "7.4", description: "A dropout from upper-class America seeks meaning in a working-class existence." },
            { title: "Catch-22", imageUrl: "image/catch_22.jpg", releaseDate: "1970", rated: "7.1", description: "A pilot tries to be declared insane to stop flying in World War II." },
            { title: "The Conformist", imageUrl: "image/the_conformist.jpg", releaseDate: "1970", rated: "7.9", description: "An Italian man becomes a fascist and is tasked with assassinating his former professor." },
            { title: "MASH", imageUrl: "image/mash.jpg", releaseDate: "1970", rated: "7.4", description: "A dark comedy set in a mobile army hospital during the Korean War." }
        ],
        
        1971: [
            { title: "The French Connection", imageUrl: "image/french_connection.jpg", releaseDate: "1971", rated: "7.8", description: "A pair of New York City detectives set out to bust a drug smuggling ring." },
            { title: "A Clockwork Orange", imageUrl: "image/clockwork_orange.jpg", releaseDate: "1971", rated: "8.3", description: "In a dystopian future, a young delinquent is rehabilitated through controversial methods." },
            { title: "Dirty Harry", imageUrl: "image/dirty_harry.jpg", releaseDate: "1971", rated: "7.7", description: "A San Francisco cop with little regard for rules chases a serial killer." },
            { title: "Willy Wonka & the Chocolate Factory", imageUrl: "image/willy_wonka.jpg", releaseDate: "1971", rated: "7.8", description: "A poor boy wins a ticket to a magical chocolate factory and experiences its wonders." },
            { title: "The Last Picture Show", imageUrl: "image/last_picture_show.jpg", releaseDate: "1971", rated: "8.0", description: "A group of young people in a small town navigate their lives and relationships in the early 1950s." }
        ]
        ,
        1972: [
            { title: "The Godfather", imageUrl: "image/godfather.jpg", releaseDate: "1972", rated: "9.2", description: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son." },
            { title: "Chinatown", imageUrl: "image/chinatown.jpg", releaseDate: "1972", rated: "8.2", description: "A private detective investigates a complex case of murder and corruption in 1930s Los Angeles." },
            { title: "One Flew Over the Cuckoo's Nest", imageUrl: "image/cuckoos_nest.jpg", releaseDate: "1972", rated: "8.7", description: "A criminal pleads insanity after a series of brushes with the law, and ends up in a mental institution." },
            { title: "The Poseidon Adventure", imageUrl: "image/poseidon_adventure.jpg", releaseDate: "1972", rated: "7.1", description: "Passengers on a capsized luxury liner fight to survive as the ship sinks." },
            { title: "Cabaret", imageUrl: "image/cabaret.jpg", releaseDate: "1972", rated: "7.8", description: "A singer and an English writer become involved in the cabaret scene in 1930s Berlin." }
        ]
        ,
        1973: [
            { title: "The Exorcist", imageUrl: "image/exorcist.jpg", releaseDate: "1973", rated: "8.0", description: "A mother seeks the help of two priests to save her daughter who is possessed by a demonic entity." },
            { title: "The Sting", imageUrl: "image/sting.jpg", releaseDate: "1973", rated: "8.3", description: "Two con artists team up to pull off an elaborate scam to avenge the murder of their friend." },
            { title: "Papillon", imageUrl: "image/papillon.jpg", releaseDate: "1973", rated: "8.0", description: "A convicted felon escapes from a notorious French penal colony with the help of his fellow prisoner." },
            { title: "Mean Streets", imageUrl: "image/mean_streets.jpg", releaseDate: "1973", rated: "7.4", description: "A small-time crook struggles to balance his personal life with his involvement in organized crime." },
            { title: "Paper Moon", imageUrl: "image/paper_moon.jpg", releaseDate: "1973", rated: "8.0", description: "A con artist and a young girl team up to make a series of scams during the Great Depression." }
        ],
        1974: [
            { title: "The Godfather Part II", imageUrl: "image/godfather_part_ii.jpg", releaseDate: "1974", rated: "9.0", description: "The continuation of the Corleone family saga, focusing on the early life and career of Vito Corleone and his son Michael." },
            { title: "Chinatown", imageUrl: "image/chinatown1.jpg", releaseDate: "1974", rated: "8.2", description: "A private detective investigates a complex case of murder and corruption in 1930s Los Angeles." },
            { title: "The Taking of Pelham One Two Three", imageUrl: "image/taking_of_pelham.jpg", releaseDate: "1974", rated: "7.7", description: "Four armed men hijack a subway train and demand a ransom, while the police try to stop them." },
            { title: "Blazing Saddles", imageUrl: "image/blazing_saddles.jpg", releaseDate: "1974", rated: "7.7", description: "A satirical Western comedy about a black sheriff who is appointed to a town in the Old West." },
            { title: "The Conversation", imageUrl: "image/conversation.jpg", releaseDate: "1974", rated: "8.0", description: "A surveillance expert becomes paranoid when he suspects his work has led to a murder plot." }
        ]
        ,
        1975: [
            { title: "One Flew Over the Cuckoo's Nest", imageUrl: "image/cuckoos_nest.jpg", releaseDate: "1975", rated: "8.7", description: "A criminal pleads insanity after a series of brushes with the law, and ends up in a mental institution." },
            { title: "Jaws", imageUrl: "image/jaws.jpg", releaseDate: "1975", rated: "8.0", description: "A great white shark terrorizes a small beach town, and the local police chief, a marine biologist, and a professional shark hunter team up to capture it." },
            { title: "The Rocky Horror Picture Show", imageUrl: "image/rocky_horror.jpg", releaseDate: "1975", rated: "7.4", description: "A newly engaged couple have a breakdown in an isolated area and must seek shelter at the bizarre residence of Dr. Frank-N-Furter." },
            { title: "Dog Day Afternoon", imageUrl: "image/dog_day_afternoon.jpg", releaseDate: "1975", rated: "8.0", description: "Based on a true story, a bank robber's heist turns into a media circus and hostage situation." },
            { title: "The Towering Inferno", imageUrl: "image/towering_inferno.jpg", releaseDate: "1975", rated: "7.0", description: "A fire breaks out in a newly built skyscraper, and the people trapped inside must find a way to escape." }
        ]
        ,
        1976: [
            { title: "Taxi Driver", imageUrl: "image/taxi_driver.jpg", releaseDate: "1976", rated: "8.3", description: "A mentally unstable war veteran becomes a vigilante and develops an obsession with a young prostitute." },
            { title: "Rocky", imageUrl: "image/rocky.jpg", releaseDate: "1976", rated: "8.1", description: "A small-time boxer gets a once-in-a-lifetime chance to fight for the heavyweight title." },
            { title: "All the President's Men", imageUrl: "image/presidents_men.jpg", releaseDate: "1976", rated: "8.0", description: "Journalists Bob Woodward and Carl Bernstein investigate the Watergate scandal that leads to President Nixon's resignation." },
            { title: "Network", imageUrl: "image/network.jpg", releaseDate: "1976", rated: "8.0", description: "A television network cynically exploits a deranged ex-anchor's ravings and revelations about the news media." },
            { title: "The Omen", imageUrl: "image/omen.jpg", releaseDate: "1976", rated: "7.5", description: "A diplomat's son is discovered to be the Antichrist, leading to a series of terrifying and tragic events." }
        ]
        ,
        1977: [
            { title: "Star Wars: Episode IV - A New Hope", imageUrl: "image/star_wars.jpg", releaseDate: "1977", rated: "8.6", description: "A young farm boy joins forces with a princess, a smuggler, and a Jedi to fight against an oppressive empire and restore peace to the galaxy." },
            { title: "Close Encounters of the Third Kind", imageUrl: "image/close_encounters.jpg", releaseDate: "1977", rated: "7.7", description: "A man experiences a series of unusual events that lead him to uncover the truth about extraterrestrial beings." },
            { title: "Annie Hall", imageUrl: "image/annie_hall.jpg", releaseDate: "1977", rated: "8.0", description: "A neurotic comedian reflects on his past relationship with a quirky and unpredictable woman." },
            { title: "The Goodbye Girl", imageUrl: "image/goodbye_girl.jpg", releaseDate: "1977", rated: "7.4", description: "A struggling actress and her young daughter are forced to live with a temperamental actor, leading to unexpected romance and complications." },
            { title: "The Hills Have Eyes", imageUrl: "image/hills_have_eyes.jpg", releaseDate: "1977", rated: "6.7", description: "A family on a road trip becomes stranded in a desert where they encounter a group of psychotic cannibals." }
        ]
        ,
        1978: [
            { title: "The Deer Hunter", imageUrl: "image/deer_hunter.jpg", releaseDate: "1978", rated: "8.1", description: "The lives of three working-class friends are changed forever after their service in the Vietnam War." },
            { title: "Halloween", imageUrl: "image/halloween.jpg", releaseDate: "1978", rated: "7.8", description: "A masked killer escapes from a mental institution and returns to his hometown to terrorize a teenage babysitter and her friends." },
            { title: "Grease", imageUrl: "image/grease.jpg", releaseDate: "1978", rated: "7.2", description: "A musical about the high school romance between a greaser and a good girl, set in the 1950s." },
            { title: "Jaws 2", imageUrl: "image/jaws_2.jpg", releaseDate: "1978", rated: "5.8", description: "The sequel to Jaws, where a new great white shark terrorizes the same small beach town." },
            { title: "The Last Waltz", imageUrl: "image/last_waltz.jpg", releaseDate: "1978", rated: "8.0", description: "A documentary capturing the farewell concert of The Band, featuring performances by several rock and folk legends." }
        ]
        ,
        1979: [
            { title: "Apocalypse Now", imageUrl: "image/apocalypse_now.jpg", releaseDate: "1979", rated: "8.4", description: "A U.S. Army officer is sent on a mission to assassinate a rogue colonel who has gone insane during the Vietnam War." },
            { title: "Kramer vs. Kramer", imageUrl: "image/kramer_vs_kramer.jpg", releaseDate: "1979", rated: "7.8", description: "A recently divorced man struggles to balance his career and custody of his young son." },
            { title: "Manhattan", imageUrl: "image/manhattan.jpg", releaseDate: "1979", rated: "8.0", description: "A middle-aged New Yorker juggles relationships with a high school student and his own ex-wife." },
            { title: "Alien", imageUrl: "image/alien.jpg", releaseDate: "1979", rated: "8.4", description: "The crew of a deep space mining ship encounters a deadly extraterrestrial life form." },
            { title: "The China Syndrome", imageUrl: "image/china_syndrome.jpg", releaseDate: "1979", rated: "7.4", description: "A nuclear plant worker discovers safety violations that could lead to a catastrophic meltdown." }
        ]
        ,
        1980: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1981: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1982: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1983: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1984: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1985: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1986: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1987: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1988: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1989: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1990: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1991: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1982: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1993: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1994: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1995: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1996: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1997: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1998: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1999: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2000: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2001: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2002: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2003: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2004: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2005: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2006: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],

        2007: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2008: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2009: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2010: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2011: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2012: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2013: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2014: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2015: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2016: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],2017: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],

        2018: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        2019: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],



        
    };

    // Les 5 meilleurs films de toute l'histoire
    const topMoviesOfAllTime = [
        { title: "The GodFather", imageUrl: "image/godfather.jpg", releaseDate: "1970", rated: "9.4", description: "Michael Corleone qui, après une attaque contre son père, se retrouve plongé dans le monde criminel de sa famille mafieuse" },
        { title: "The Dark Knight", imageUrl: "image/godfather.jpg", releaseDate: "2012", rated: "9.4", description: "Batman qui doit sauver Gotham City." },
        { title: "Schindler's List", imageUrl: "image/godfather.jpg", releaseDate: "1993", rated: "9.0", description: "Un homme d'affaires sauve des juifs pendant l'Holocauste." },
        { title: "Pulp Fiction", imageUrl: "image/godfather.jpg", releaseDate: "1994", rated: "8.9", description: "Des histoires entrecroisées de criminels à Los Angeles." },
        { title: "Inception", imageUrl: "image/godfather.jpg", releaseDate: "2010", rated: "8.8", description: "Un voleur entre dans les rêves des gens pour voler des secrets." }
    ];


    const moviesContainer = document.querySelector(".movies-container");
    const titleElement = document.querySelector("#top-movies h1");
    const searchBar = document.querySelector("#search");
    const logo = document.querySelector("#logo");
    const modal = document.querySelector("#movie-modal");
    const modalClose = document.querySelector("#movie-modal .close");
    const ratingInput = document.getElementById("rating-input");
    const submitRatingButton = document.getElementById("submit-rating");
    const userRatingElement = document.getElementById("user-rating");

    function displayMovies(movies, year) {
        moviesContainer.innerHTML = "";
        titleElement.textContent = year ? `5 Meilleurs Films de ${year}` : `5 Meilleurs Films de Toute l'Histoire`;

        movies.forEach(movie => {
            const movieCard = document.createElement("div");
            movieCard.className = "movie-card";

            const movieImage = document.createElement("img");
            movieImage.src = movie.imageUrl;
            movieImage.alt = movie.title;

            const movieTitle = document.createElement("h2");
            movieTitle.textContent = movie.title;

            const movieDate = document.createElement("p");
            movieDate.className = "movie-release-date";
            movieDate.textContent = `Release Date: ${movie.releaseDate}`;

            const movieRated = document.createElement("p");
            movieRated.className = "movie-rating";
            movieRated.textContent = `Rating: ${movie.rated}`;

            const movieDesc = document.createElement("p");
            movieDesc.className = "movie-description";
            movieDesc.textContent = movie.description;

            movieCard.appendChild(movieImage);
            movieCard.appendChild(movieTitle);
            movieCard.appendChild(movieDate);
            movieCard.appendChild(movieRated);
            movieCard.appendChild(movieDesc);

            // Ajouter l'événement de clic pour ouvrir la fenêtre modale
            movieCard.addEventListener("click", function() {
                showMovieDetails(movie);
            });

            moviesContainer.appendChild(movieCard);
        });
    }

    function showMovieDetails(movie) {
        const moviePoster = modal.querySelector(".movie-poster");
        const movieTitle = modal.querySelector(".movie-title");
        const movieMeta = modal.querySelector(".movie-meta");
        const movieDescription = modal.querySelector(".movie-description");
        const movieRated = modal.querySelector(".movie-rating");

        moviePoster.src = movie.imageUrl;
        movieTitle.textContent = movie.title;
        movieMeta.textContent = `${movie.releaseDate} | Réalisateur | Genre`;
        movieDescription.textContent = movie.description;

        // Afficher la note existante ou un message par défaut
        userRatingElement.textContent = movie.rated; 
        ratingInput.value = ""; // Réinitialiser la barre de saisie

        modal.style.display = "block"; // Afficher la fenêtre modale
    }

    modalClose.addEventListener("click", function() {
        modal.style.display = "none"; // Fermer la fenêtre modale
    });

    submitRatingButton.addEventListener("click", function() {
        const newRating = parseFloat(ratingInput.value);
        if (!isNaN(newRating) && newRating >= 0 && newRating <= 10) {
            userRatingElement.textContent = `Votre rating est : ${newRating.toFixed(1)}`; // Afficher le nouveau rating
            alert("Votre rating a été soumis !");
        } else {
            alert("Veuillez entrer un rating valide entre 0.0 et 10.0");
        }
    });

    // Afficher les 5 meilleurs films de toute l'histoire
    displayMovies(topMoviesOfAllTime);

    // Afficher les 5 meilleurs films de toute l'histoire en cliquant sur le logo
    logo.addEventListener("click", function() {
        displayMovies(topMoviesOfAllTime);
    });

    // Afficher les films d'une année spécifique
    document.querySelectorAll(".sub-menu a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const year = this.textContent;
            const movies = moviesByYear[year] || [];
            displayMovies(movies, year);
        });
    });

    // Fonction de recherche
    searchBar.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const searchTerm = searchBar.value.trim().toLowerCase(); // Prendre en compte la casse
            let foundMovie = null;

            Object.values(moviesByYear).forEach(movies => {
                movies.forEach(movie => {
                    if (movie.title.toLowerCase() === searchTerm) { // Comparaison stricte
                        foundMovie = movie;
                    }
                });
            });

            if (foundMovie) {
                titleElement.textContent = `Résultat de la recherche pour "${foundMovie.title}"`;
                displayMovies([foundMovie], foundMovie.releaseDate);
            } else {
                titleElement.textContent = `Aucun film trouvé pour "${searchTerm}"`;
                moviesContainer.innerHTML = "";
            }
        }
    });
});