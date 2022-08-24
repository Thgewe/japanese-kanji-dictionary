import {ABOUT_ROUTE, KANJI_ROUTE, READING_ROUTE} from "./utils/constants";
import AboutPage from "./pages/AboutPage/AboutPage";
import KanjiPage from "./pages/KanjiPage/KanjiPage";
import ReadingPage from "./pages/ReadingPage/ReadingPage";

export const routes = [
    {
        path: ABOUT_ROUTE,
        component: <AboutPage />
    },
    {
        path: KANJI_ROUTE,
        component: <KanjiPage />
    },
    {
        path: READING_ROUTE,
        component: <ReadingPage />
    }
]