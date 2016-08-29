(function() {
	var app = b4w.require('app');

	var data = b4w.require('data');

	var scenes = b4w.require('scenes');

	var geometry = b4w.require('geometry');

	// console.log(scenes);

	app.init({
		canvas_container_id: 'app',
		show_fps: true,
		callback: function(canvas, su) {
			data.load('index.json', function() {
				var obj = scenes.get_object_by_name('Cube');
				console.log(obj);
				console.log(geometry.extract_vertex_array(obj, 'Material.002', 'a_position'));
				console.log('loading...');
			});
		}
	});
})();