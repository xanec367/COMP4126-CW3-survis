/**
 * Name as used as title for the main page
 * @type {string}
 */
var title = 'COMP4126 CW3: MRI Brain Tumor Classification Literature Review';

/**
 * Relative path to the data directory
 * @type {string}
 */
var dataDir = 'data/';

/**
 * Relative path to the js directory
 * @type {string}
 */
var jsDir = 'js/';

/**
 * Relative path to the styles directory
 * @type {string}
 */
var stylesDir = 'styles/';

/**
 * Options for displaying tag clouds.
 */
var tagCloudOptions = [{
    field: 'keywords',
    title: 'Keywords',
    minTagFrequency: 1
}, {
    field: 'author',
    title: 'Authors',
    minTagFrequency: 1
}, {
    field: 'year',
    title: 'Years',
    minTagFrequency: 1
}];

/**
 * If BibTeX entries (and tags) should be editable
 * @type {boolean}
 */
var editable = false;

/**
 * Subtitle describing the paper the data is referring to.
 */
var paper = {
    html: 'Literature collection for COMP4126 Coursework 3: transfer learning, ensemble learning, and evaluation reliability in MRI brain tumor classification.',
    id: 'Hun2024'
};

/**
 * Extra pages like an about page.
 */
var extraPages = {};

/**
 * Custom style as path to an extra css file.
 */
var customStyle = '';

var citations = null;
