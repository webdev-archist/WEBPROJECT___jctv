var countries=[{"name":"Aruba","code2":"AW"},{"name":"Afghanistan","code2":"AF"},{"name":"Angola","code2":"AO"},{"name":"Anguilla","code2":"AI"},{"name":"Albania","code2":"AL"},{"name":"Andorra","code2":"AD"},{"name":"Netherlands Antilles","code2":"AN"},{"name":"United Arab Emirates","code2":"AE"},{"name":"Argentina","code2":"AR"},{"name":"Armenia","code2":"AM"},{"name":"American Samoa","code2":"AS"},{"name":"Antarctica","code2":"AQ"},{"name":"French Southern territories","code2":"TF"},{"name":"Antigua and Barbuda","code2":"AG"},{"name":"Australia","code2":"AU"},{"name":"Austria","code2":"AT"},{"name":"Azerbaijan","code2":"AZ"},{"name":"Burundi","code2":"BI"},{"name":"Belgium","code2":"BE"},{"name":"Benin","code2":"BJ"},{"name":"Burkina Faso","code2":"BF"},{"name":"Bangladesh","code2":"BD"},{"name":"Bulgaria","code2":"BG"},{"name":"Bahrain","code2":"BH"},{"name":"Bahamas","code2":"BS"},{"name":"Bosnia and Herzegovina","code2":"BA"},{"name":"Belarus","code2":"BY"},{"name":"Belize","code2":"BZ"},{"name":"Bermuda","code2":"BM"},{"name":"Bolivia","code2":"BO"},{"name":"Brazil","code2":"BR"},{"name":"Barbados","code2":"BB"},{"name":"Brunei","code2":"BN"},{"name":"Bhutan","code2":"BT"},{"name":"Bouvet Island","code2":"BV"},{"name":"Botswana","code2":"BW"},{"name":"Central African Republic","code2":"CF"},{"name":"Canada","code2":"CA"},{"name":"Cocos (Keeling) Islands","code2":"CC"},{"name":"Switzerland","code2":"CH"},{"name":"Chile","code2":"CL"},{"name":"China","code2":"CN"},{"name":"Côte d'Ivoire","code2":"CI"},{"name":"Cameroon","code2":"CM"},{"name":"Congo, The Democratic Republic of the","code2":"CD"},{"name":"Congo","code2":"CG"},{"name":"Cook Islands","code2":"CK"},{"name":"Colombia","code2":"CO"},{"name":"Comoros","code2":"KM"},{"name":"Cape Verde","code2":"CV"},{"name":"Costa Rica","code2":"CR"},{"name":"Cuba","code2":"CU"},{"name":"Christmas Island","code2":"CX"},{"name":"Cayman Islands","code2":"KY"},{"name":"Cyprus","code2":"CY"},{"name":"Czech Republic","code2":"CZ"},{"name":"Germany","code2":"DE"},{"name":"Djibouti","code2":"DJ"},{"name":"Dominica","code2":"DM"},{"name":"Denmark","code2":"DK"},{"name":"Dominican Republic","code2":"DO"},{"name":"Algeria","code2":"DZ"},{"name":"Ecuador","code2":"EC"},{"name":"Egypt","code2":"EG"},{"name":"Eritrea","code2":"ER"},{"name":"Western Sahara","code2":"EH"},{"name":"Spain","code2":"ES"},{"name":"Estonia","code2":"EE"},{"name":"Ethiopia","code2":"ET"},{"name":"Finland","code2":"FI"},{"name":"Fiji Islands","code2":"FJ"},{"name":"Falkland Islands","code2":"FK"},{"name":"France","code2":"FR"},{"name":"Faroe Islands","code2":"FO"},{"name":"Micronesia, Federated States of","code2":"FM"},{"name":"Gabon","code2":"GA"},{"name":"United Kingdom","code2":"GB"},{"name":"Georgia","code2":"GE"},{"name":"Ghana","code2":"GH"},{"name":"Gibraltar","code2":"GI"},{"name":"Guinea","code2":"GN"},{"name":"Guadeloupe","code2":"GP"},{"name":"Gambia","code2":"GM"},{"name":"Guinea-Bissau","code2":"GW"},{"name":"Equatorial Guinea","code2":"GQ"},{"name":"Greece","code2":"GR"},{"name":"Grenada","code2":"GD"},{"name":"Greenland","code2":"GL"},{"name":"Guatemala","code2":"GT"},{"name":"French Guiana","code2":"GF"},{"name":"Guam","code2":"GU"},{"name":"Guyana","code2":"GY"},{"name":"Hong Kong","code2":"HK"},{"name":"Heard Island and McDonald Islands","code2":"HM"},{"name":"Honduras","code2":"HN"},{"name":"Croatia","code2":"HR"},{"name":"Haiti","code2":"HT"},{"name":"Hungary","code2":"HU"},{"name":"Indonesia","code2":"ID"},{"name":"India","code2":"IN"},{"name":"British Indian Ocean Territory","code2":"IO"},{"name":"Ireland","code2":"IE"},{"name":"Iran","code2":"IR"},{"name":"Iraq","code2":"IQ"},{"name":"Iceland","code2":"IS"},{"name":"Israel","code2":"IL"},{"name":"Italy","code2":"IT"},{"name":"Jamaica","code2":"JM"},{"name":"Jordan","code2":"JO"},{"name":"Japan","code2":"JP"},{"name":"Kazakstan","code2":"KZ"},{"name":"Kenya","code2":"KE"},{"name":"Kyrgyzstan","code2":"KG"},{"name":"Cambodia","code2":"KH"},{"name":"Kiribati","code2":"KI"},{"name":"Saint Kitts and Nevis","code2":"KN"},{"name":"South Korea","code2":"KR"},{"name":"Kuwait","code2":"KW"},{"name":"Laos","code2":"LA"},{"name":"Lebanon","code2":"LB"},{"name":"Liberia","code2":"LR"},{"name":"Libyan Arab Jamahiriya","code2":"LY"},{"name":"Saint Lucia","code2":"LC"},{"name":"Liechtenstein","code2":"LI"},{"name":"Sri Lanka","code2":"LK"},{"name":"Lesotho","code2":"LS"},{"name":"Lithuania","code2":"LT"},{"name":"Luxembourg","code2":"LU"},{"name":"Latvia","code2":"LV"},{"name":"Macao","code2":"MO"},{"name":"Morocco","code2":"MA"},{"name":"Monaco","code2":"MC"},{"name":"Moldova","code2":"MD"},{"name":"Madagascar","code2":"MG"},{"name":"Maldives","code2":"MV"},{"name":"Mexico","code2":"MX"},{"name":"Marshall Islands","code2":"MH"},{"name":"Macedonia","code2":"MK"},{"name":"Mali","code2":"ML"},{"name":"Malta","code2":"MT"},{"name":"Myanmar","code2":"MM"},{"name":"Mongolia","code2":"MN"},{"name":"Northern Mariana Islands","code2":"MP"},{"name":"Mozambique","code2":"MZ"},{"name":"Mauritania","code2":"MR"},{"name":"Montserrat","code2":"MS"},{"name":"Martinique","code2":"MQ"},{"name":"Mauritius","code2":"MU"},{"name":"Malawi","code2":"MW"},{"name":"Malaysia","code2":"MY"},{"name":"Mayotte","code2":"YT"},{"name":"Namibia","code2":"NA"},{"name":"New Caledonia","code2":"NC"},{"name":"Niger","code2":"NE"},{"name":"Norfolk Island","code2":"NF"},{"name":"Nigeria","code2":"NG"},{"name":"Nicaragua","code2":"NI"},{"name":"Niue","code2":"NU"},{"name":"Netherlands","code2":"NL"},{"name":"Norway","code2":"NO"},{"name":"Nepal","code2":"NP"},{"name":"Nauru","code2":"NR"},{"name":"New Zealand","code2":"NZ"},{"name":"Oman","code2":"OM"},{"name":"Pakistan","code2":"PK"},{"name":"Panama","code2":"PA"},{"name":"Pitcairn","code2":"PN"},{"name":"Peru","code2":"PE"},{"name":"Philippines","code2":"PH"},{"name":"Palau","code2":"PW"},{"name":"Papua New Guinea","code2":"PG"},{"name":"Poland","code2":"PL"},{"name":"Puerto Rico","code2":"PR"},{"name":"North Korea","code2":"KP"},{"name":"Portugal","code2":"PT"},{"name":"Paraguay","code2":"PY"},{"name":"Palestine","code2":"PS"},{"name":"French Polynesia","code2":"PF"},{"name":"Qatar","code2":"QA"},{"name":"Réunion","code2":"RE"},{"name":"Romania","code2":"RO"},{"name":"Russian Federation","code2":"RU"},{"name":"Rwanda","code2":"RW"},{"name":"Saudi Arabia","code2":"SA"},{"name":"Sudan","code2":"SD"},{"name":"Senegal","code2":"SN"},{"name":"Singapore","code2":"SG"},{"name":"South Georgia and the South Sandwich Islands","code2":"GS"},{"name":"Saint Helena","code2":"SH"},{"name":"Svalbard and Jan Mayen","code2":"SJ"},{"name":"Solomon Islands","code2":"SB"},{"name":"Sierra Leone","code2":"SL"},{"name":"El Salvador","code2":"SV"},{"name":"San Marino","code2":"SM"},{"name":"Somalia","code2":"SO"},{"name":"Saint Pierre and Miquelon","code2":"PM"},{"name":"Sao Tome and Principe","code2":"ST"},{"name":"Suriname","code2":"SR"},{"name":"Slovakia","code2":"SK"},{"name":"Slovenia","code2":"SI"},{"name":"Sweden","code2":"SE"},{"name":"Swaziland","code2":"SZ"},{"name":"Seychelles","code2":"SC"},{"name":"Syria","code2":"SY"},{"name":"Turks and Caicos Islands","code2":"TC"},{"name":"Chad","code2":"TD"},{"name":"Togo","code2":"TG"},{"name":"Thailand","code2":"TH"},{"name":"Tajikistan","code2":"TJ"},{"name":"Tokelau","code2":"TK"},{"name":"Turkmenistan","code2":"TM"},{"name":"East Timor","code2":"TP"},{"name":"Tonga","code2":"TO"},{"name":"Trinidad and Tobago","code2":"TT"},{"name":"Tunisia","code2":"TN"},{"name":"Turkey","code2":"TR"},{"name":"Tuvalu","code2":"TV"},{"name":"Taiwan","code2":"TW"},{"name":"Tanzania","code2":"TZ"},{"name":"Uganda","code2":"UG"},{"name":"Ukraine","code2":"UA"},{"name":"United States Minor Outlying Islands","code2":"UM"},{"name":"Uruguay","code2":"UY"},{"name":"United States","code2":"US"},{"name":"Uzbekistan","code2":"UZ"},{"name":"Holy See (Vatican City State)","code2":"VA"},{"name":"Saint Vincent and the Grenadines","code2":"VC"},{"name":"Venezuela","code2":"VE"},{"name":"Virgin Islands, British","code2":"VG"},{"name":"Virgin Islands, U.S.","code2":"VI"},{"name":"Vietnam","code2":"VN"},{"name":"Vanuatu","code2":"VU"},{"name":"Wallis and Futuna","code2":"WF"},{"name":"Samoa","code2":"WS"},{"name":"Yemen","code2":"YE"},{"name":"Yugoslavia","code2":"YU"},{"name":"South Africa","code2":"ZA"},{"name":"Zambia","code2":"ZM"},{"name":"Zimbabwe","code2":"ZW"}]