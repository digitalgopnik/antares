'use strict';
import { ipcRenderer } from 'electron';

export default class {
   static makeTest (params) {
      return ipcRenderer.invoke('testConnection', params);
   }

   static checkConnection (params) {
      return ipcRenderer.invoke('checkConnection', params);
   }

   static connect (params) {
      return ipcRenderer.invoke('connect', params);
   }

   static disconnect (uid) {
      return ipcRenderer.invoke('disconnect', uid);
   }

   static refresh (uid) {
      return ipcRenderer.invoke('refresh', uid);
   }

   static rawQuery (params) {
      return ipcRenderer.invoke('rawQuery', params);
   }
}