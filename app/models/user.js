import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  userGroups: belongsTo("user-group"),
  first_name: attr("string"),
  middle_name: attr("string", { defaultValue: null }),
  last_name: attr("string"),
  email: attr("string"),
  created_at: attr("date"),
  updated_at: attr("date"),
  deleted_at: attr("date", { defaultValue: null })
});
