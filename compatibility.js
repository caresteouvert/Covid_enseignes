/*
 * Generates regles.csv from rules.csv for compatibility
 */

const INPUT_FILE = 'rules.csv';
const OUTPUT_FILE = 'regles.csv';

const fs = require('fs');
const csvParse = require('csv-parse');
const csvStringify = require('csv-stringify');

const mapping_status = { "open": "ouvert", "open_adapted": "ouvert_adapté", "partial": "partiel", "closed": "fermé" };

fs.readFile(INPUT_FILE, (err, txt) => {
	if(err) {
		throw new Error(err);
	}

	csvParse(txt, { columns: true }, (err, csv) => {
		if(err) {
			throw new Error(err);
		}

		const out = csv.filter(row => row.country === 'FR').map(row => ({
			categorie: row.category,
			nom_enseigne: row.brand_name,
			id_wikidata: row.wikidata_id,
			regle_ouverture: mapping_status[row.opening_rule],
			horaires: row.opening_hours,
			infos: row.description,
			url_source: row.source_url,
			url_horaires: row.opening_hours_url
		}));

		csvStringify(
			out,
			{
				columns: [ 'categorie', 'nom_enseigne', 'id_wikidata', 'regle_ouverture', 'horaires', 'infos', 'url_source', 'url_horaires' ],
				header: true
			},
			(err, csv) => {
				if(err) {
					throw new Error(err);
				}

				fs.writeFile(OUTPUT_FILE, csv, (err) => {
					if(err) {
						throw new Error(err);
					}

					console.log("Done");
				});
			}
		);
	});
});
