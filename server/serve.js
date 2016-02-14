currenttranslation.permit(['insert', 'update', 'remove']).never().apply();

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
	"Igbo",
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
	"Zulu"]

translations.remove({});
contributors.remove({});


Meteor.methods({
	add_translation: function(chrome, translation) {
		user = Meteor.user().services.google.email
		if (contributors.find({"user": user}).fetch().length === 0) {
			first = translations.find({"translation": " "}).fetch()[0].language;
			translations.update({"translation": " "}, $set: {"language": before, "translation": translation});

			index = Math.floor((Math.random() * languages));
			translations.insert({
				"language": languages[index],
				"translation": ""
			});

			contributors.insert({
				"user": user
			});
		}


	}
})