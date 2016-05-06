import Model from 'ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Model.extend({
  userGroups: belongsTo("user-group"),
  name: attr("string"),
  title: attr("string", { defaultValue: null }),
  description: attr("string", { defaultValue: null }),
  created_at: attr("date"),
  updated_at: attr("date"),
  deleted_at: attr("date", { defaultValue: null })
});
