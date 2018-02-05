# jsonapi-orm-query
Encode ORM Query based on URL query

## URL
Request | URL | Description | Sequelize query | parameters
--- | --- | --- | --- | ---
*Still* | `renders` | **nicely** | |
*GET* | /objects | Just list of "objects" | Model.Object.findAll |
*GET* | /objects/2 | "Object" with id=2| Model.Object.findOne |
*GET* | /objects/2?include=i18n_data | "Object" with id=2| Models.Object.findOne |```{ include = [{model : Models.I18nData] } ```
