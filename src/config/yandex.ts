import { SearchEngineConfig } from 'src/types';

export const yandex: SearchEngineConfig = {
  resultSelector: 'li.serp-item',
  domainSelector: '.organic__subtitle .path .link',
  observerSelector: '.content__left'
};
