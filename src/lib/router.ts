import { writable } from "svelte/store";

export const currentRoute = writable("/");

export function navigate(path: string) {
  currentRoute.set(path);
  window.history.pushState({}, "", path);
}

export function initRouter() {
  // 브라우저 뒤로가기/앞으로가기 처리
  window.addEventListener("popstate", () => {
    currentRoute.set(window.location.pathname);
  });

  // 초기 라우트 설정
  currentRoute.set(window.location.pathname);
}
