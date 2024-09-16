document.addEventListener("DOMContentLoaded",function(){

    const moviesByYear={

        1970: [
            { title: "the godfather", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1971: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1972: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1973: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1974: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1975: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1976: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1977: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1978: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
        1979: [
            { title: "Movie A", imageUrl: "filmA.jpg", releaseDate: "1970", rated: "8.5", description: "Description A" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
            { title: "Movie B", imageUrl: "filmB.jpg", releaseDate: "1970", rated: "8.0", description: "Description B" },
        ],
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

    const moviesContainer = document.querySelector(".movies-container");
    const titleElement = document.querySelector("#top-movies h1");
    const searchBar = document.querySelector("#search");

    function displayMovies(movies, year) {
        moviesContainer.innerHTML = "";
        titleElement.textContent = `5 Meilleurs Films de ${year}`;

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

            moviesContainer.appendChild(movieCard);
        });
    }

    document.querySelectorAll(".sub-menu a").forEach(anchor => {
        anchor.addEventListener("click", function(event) {
            event.preventDefault();
            const year = this.textContent;
            const movies = moviesByYear[year] || [];
            displayMovies(movies, year);
        });
    });

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