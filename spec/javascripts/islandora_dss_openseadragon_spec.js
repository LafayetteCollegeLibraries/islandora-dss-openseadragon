/**
 * @file The Jasmine spec for the DSS OpenSeadragon widget
 *
 */

describe("DSS Islandora OpenSeadragon", function() {

	var seadragon;
	var drupal;

	beforeEach(function() {

		// Drupal mock Object
		drupal = { behaviors:
			   { islandoraOpenSeadragon: function(context, settings) { } },
			   settings:
			   { basePath: 'http://localhost/',
			     islandoraOpenSeadragon:
			     { resourceUri: 'http://uri/',
			       pid: 'islandora:testObject',
			       settings: { id: 'testId'}
			     }
			   }
		};

		seadragon = new DssOpenSeadragon($, drupal);
	    });

	it("should instantiate with a Drupal Object", function() {

		expect(seadragon.$).toBe($);
	    });
    });
