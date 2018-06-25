/* feedreader.js
/* We're placing all of our tests within the $() function,
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });
		
		

        /* TODO: Write a test that loops through each feed
         */
		 it('should be having a url', function() {
			 for(var i=0;i<allFeeds.length;i++){
					expect(allFeeds[i].url).toBeDefined();
					expect(allFeeds[i].url.length).not.toBe(0);
			 }
            
        });


        /* TODO: Write a test that loops through each feed
         */
		  it('should be having a name', function() {
			 for(var i=0;i<allFeeds.length;i++){
					expect(allFeeds[i].name).toBeDefined();
					expect(allFeeds[i].name.length).not.toBe(0);
			 }
            
        });
    });


    /* TODO: Write a new test suite named "The menu" */

		 describe('The menu', function() {
        /* TODO: Write a test that ensures the menu element is
         */
			it('should be hiding the menu element', function() {
				var  body = $("body");
				expect(body.hasClass('menu-hidden')).toBe(true);
			});

         /* TODO: Write a test that ensures the menu changes
          */
		  it('menu should be toggling display when clicked', function() {
				var menuIcon = $(".menu-icon-link");
				var  body = $("body");
				
				menuIcon.click();
				expect(body.hasClass('menu-hidden')).toBe(false);
				menuIcon.click();
				expect(body.hasClass('menu-hidden')).toBe(true);
				
			});
			  
		});
    /* TODO: Write a new test suite named "Initial Entries" */
		 describe('Initial Entries', function() {
        /* TODO: Write a test that ensures when the loadFeed
         */
			beforeEach(function(done) {
				loadFeed(0,done);
			});
			it('should be having a single entry', function() {
				//loadFeed(0);
				var feedWrapper = $('.feed');
				var feedWrapperEntryLink = $('.feed .entry');
				expect(feedWrapperEntryLink.length).not.toBe(0);
			});
		});
    /* TODO: Write a new test suite named "New Feed Selection" */
		 describe('New Feed Selection', function() {
        /* TODO: Write a test that ensures when a new feed is loaded
        
         */
			var firstFeed,secondFeed;
			beforeEach(function(done) {
				loadFeed(0, function() {
					firstFeed = $('.feed').html();
					loadFeed(1, done);
				});
			});
			
			
			it('content of feed changes', function() {
				var currentFeed = $('.feed').html()
				expect(firstFeed).not.toBe(firstFeed); 
			});
		 
		 });
}());
