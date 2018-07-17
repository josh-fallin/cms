db.sequences.updateOne(  {"maxDocumentId" : 100}, { $set: { "maxMessageId" : 101 } } )

db.contacts.findOne( { "id" : "101" } )
db.messages.findOne( { "id" : "101" } )

// josh ObjectId : 5b4b610ef5312cf05a94c529

db.messages.update( { "id" : "101" }, { "sender" : "5b4b610ef5312cf05a94c529" } ) // this query removed all fields except sender

db.messages.deleteOne( { "sender" : "5b4b610ef5312cf05a94c529" } )

db.messages.insertOne( 	  {"id": "101", "subject": "hey", "msgText": "HYFR", "sender": "5b4b610ef5312cf05a94c529"} )



