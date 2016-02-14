translations.permit(['insert', 'update', 'remove']).never().apply();

languages = [
	"Afrikaans",
	"Albanian",
	"Arabic",
	"Armenian",
	"Azerbaijani",
	"Basque",
	"Belarusian",
	"Bengali",
	"Bosnian",
	"Bulgarian",
	"Catalan",
	"Cebuano",
	"Chichewa",
	"Chinese",
	"Croatian",
	"Czech",
	"Danish",
	"Dutch",
	"English",
	"Esperanto",
	"Estonian",
	"Filipino",
	"Finnish",
	"French",
	"Galician",
	"Georgian",
	"German",
	"Greek",
	"Gujarati",
	"Haitian Creole",
	"Hausa",
	"Hebrew",
	"Hindi",
	"Hmong",
	"Hungarian",
	"Icelandic",
	"Okonkwo",
	"Indonesian",
	"Irish",
	"Italian",
	"Japanese",
	"Javanese",
	"Kannada",
	"Kazakh",
	"Khmer",
	"Korean",
	"Lao",
	"Latin",
	"Latvian",
	"Lithuanian",
	"Macedonian",
	"Malagasy",
	"Malay",
	"Malayalam",
	"Maltese",
	"Maori",
	"Marathi",
	"Mongolian",
	"Myanmar (Burmese)",
	"Nepali",
	"Norwegian",
	"Persian",
	"Polish",
	"Portuguese",
	"Punjabi",
	"Romanian",
	"Russian",
	"Serbian",
	"Sesotho",
	"Sinhala",
	"Slovak",
	"Slovenian",
	"Somali",
	"Spanish",
	"Sundanese",
	"Swahili",
	"Swedish",
	"Tajik",
	"Tamil",
	"Telugu",
	"Thai",
	"Turkish",
	"Ukrainian",
	"Urdu",
	"Uzbek",
	"Vietnamese",
	"Welsh",
	"Yiddish",
	"Yoruba",
	"Zulu"
];

translations.remove({});

index = Math.floor((Math.random() * languages.length));

translations.insert({
	"translation": "",
	"language": languages[index],
	"contributor": ""
})

Meteor.methods({
	add_translation: function(chrome, translation) {
		console.log("adding translation");
		user = Meteor.user().services.google.email;
		var col = translations.find().fetch();
		contributor = col.slice(col.length - 2 , col.length - 1)[0];
		if (contributor === undefined) {
			contributor = "";
		} else {
			contributor = contributor.contributor;
		}
		if (!(contributor===user)) {
			translations.update({"translation": ""}, {$set: {"translation": translation, "contributor": user}});

			index = Math.floor((Math.random() * languages.length));
			translations.insert({
				"language": languages[index],
				"translation": "",
				"contributor": ""
			});
		}
	}
});