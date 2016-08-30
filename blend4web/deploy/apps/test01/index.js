(function() {
	var app = b4w.require('app');

	var data = b4w.require('data');

	var scenes = b4w.require('scenes');

	var geometry = b4w.require('geometry');

	var objects = b4w.require('objects');

	var textures = b4w.require('textures');

	// console.log(textures);

	app.init({
		canvas_container_id: 'app',
		show_fps: true,
		console_verbose: true,
		callback: function(canvas, su) {
			console.log(canvas);

			data.load('index.json', function() {
				app.enable_camera_controls(false, false, false, canvas, true);
				console.log('loading...');
			}, function(percentage, load_time) {
				console.log(percentage, load_time);
			});
		}
	});

	document.getElementById('fun-test-btn').addEventListener('click', function(e) {
		var obj = scenes.get_object_by_name('m_box');
		var newObj = objects.copy(obj, 'm_box_1', true);
		console.log(newObj);
		console.log(textures.get_texture_names(obj));
		console.log(geometry.extract_vertex_array(obj, 'Material.002', 'a_position'));
	}, false);
})();