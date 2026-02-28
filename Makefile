checks:
	npx standard

deps:
	npm install --no-save standard

dim:
	[ -e ~/git/blob/img/hnskins/cafe.png ]
	file ~/git/blob/img/hnskins/*.png

resize:
	osascript -e 'tell app "Chrome" to set bounds of front window to {0, 0, 1200, 660}'
