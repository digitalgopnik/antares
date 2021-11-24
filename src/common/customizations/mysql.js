const defaults = require('./defaults');

module.exports = {
   ...defaults,
   // Defaults
   defaultPort: 3306,
   defaultUser: 'root',
   defaultDatabase: null,
   // Core
   connectionSchema: true,
   collations: true,
   engines: true,
   sslConnection: true,
   sshConnection: true,
   // Tools
   processesList: true,
   // Structure
   schemas: true,
   tables: true,
   views: true,
   triggers: true,
   routines: true,
   functions: true,
   schedulers: true,
   // Settings
   elementsWrapper: '',
   stringsWrapper: '"',
   tableAdd: true,
   viewAdd: true,
   triggerAdd: true,
   routineAdd: true,
   functionAdd: true,
   schedulerAdd: true,
   schemaEdit: true,
   schemaDrop: true,
   tableSettings: true,
   viewSettings: true,
   triggerSettings: true,
   routineSettings: true,
   functionSettings: true,
   schedulerSettings: true,
   indexes: true,
   foreigns: true,
   sortableFields: true,
   unsigned: true,
   nullable: true,
   zerofill: true,
   tableOptions: true,
   autoIncrement: true,
   comment: true,
   collation: true,
   definer: true,
   onUpdate: true,
   viewAlgorithm: true,
   viewSqlSecurity: true,
   viewUpdateOption: true,
   procedureDeterministic: true,
   procedureDataAccess: true,
   procedureSql: 'BEGIN\r\n\r\nEND',
   procedureContext: true,
   triggerSql: 'BEGIN\r\n\r\nEND',
   functionDeterministic: true,
   functionDataAccess: true,
   functionSql: 'BEGIN\r\n\r\nEND',
   parametersLength: true,
   readOnlyMode: true
};
