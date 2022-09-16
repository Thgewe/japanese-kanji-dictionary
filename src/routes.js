import {ABOUT_ROUTE, KANJI_ROUTE, READING_ROUTE} from "./utils/constants";
import AboutPage from "./pages/AboutPage/AboutPage";
import KanjiPage from "./pages/KanjiPage/KanjiPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";
import KanjiPageNested from "./components/KanjiPageNested";
import ReadingPageNested from "./components/ReadingPageNested";


export const routes = [
    {
        path: ABOUT_ROUTE,
        name: 'about',
        component: <AboutPage />,
        nested: false,
    },
    {
        path: KANJI_ROUTE,
        name: 'kanji',
        component: <KanjiPage />,
        nested: {
            path: ':kanjiId',
            component: <KanjiPageNested />
        }
    },
    {
        path: READING_ROUTE,
        name: 'reading',
        component: <ReadingPage />,
        nested: {
            path: ':readingId',
            component: <ReadingPageNested />
        }
    }
]