var mongoose = require('mongoose')
  , Schema   = mongoose.Schema
  , ObjectId = Schema.ObjectId;

/** Schema użytkownika do bazy danych */
var groupSchema = new Schema({
      name: 
        { type: String
        , required: true
        , index: { unique: true }
        }
    , dom: 
        { title: { type: String, required: true }
        , icon: { type: String, required: true }
        , links: 
            [ { 
                  title: { type: String, required: true }
                , sref: { type: String, required: true }
            } ]
        }
    , data: 
        { type: Schema.Types.Mixed
        , required: false
        }
});
module.exports = mongoose.model('Group', groupSchema);