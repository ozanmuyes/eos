import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  users: hasMany("user"),
  permissions: hasMany("permission"),
  name: attr("string"),
  title: attr("string", { defaultValue: null }),
  created_at: attr("date"),
  updated_at: attr("date"),
  deleted_at: attr("date", { defaultValue: null })
});
