$(function(){
$("#elastic_grid_demo").elastic_grid({	
	'hoverDirection': true,
	'hoverDelay': 0,
	'hoverInverse': false,
	'expandingSpeed': 500,
	'expandingHeight': 500,
	'items' :
		[
			{
			'title' : 'Gallery 1',
			'description'   : 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.',
			'thumbnail' : ['img/cabo01.jpg', 'img/cabo02.jpg', 'img/cabo03.jpg', 'img/cabo04.jpg', 'img/cabo05.jpg'],
			'large' : ['img/cabo01.jpg', 'img/cabo02.jpg', 'img/cabo03.jpg', 'img/cabo04.jpg', 'img/cabo05.jpg'],
			'button_list'   :
			[
			{ 'title':'Demo', 'url' : 'http://#' },
			{ 'title':'Download', 'url':'http://#'}
			],
			'tags'  : ['All']
			}
	 
		]
	});
});