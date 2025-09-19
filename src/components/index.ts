import { lazy } from "react";

const Map = lazy(() => import('./Map'));
const Header = lazy(() => import('./Header'));
const Sweper = lazy(() => import('./Sweper'));
const ToTopBtn = lazy(() => import('./ToTopBtn'));
const Nav = lazy(() => import('./Nav'));
const Button = lazy(() => import('./button'));

export {
   Map,
   Header,
   Sweper,
   ToTopBtn,
   Nav,
   Button
}