module.exports = {
	"config": {
		"apiKey": "c2b08663-06e3-440c-ef6f-13978b42883a",
		"securityKey": "f26baf68-e3a9-45fc-effe-502e47116265",
		"organization_id": "5de0387b12e200ea63204d6c",
		"host": "server.cocreate.app:8088"
	},

    "sources": [{
            "entry": "./docs/index.html",
            "collection": "files",
            "document_id": "",
            "key": "src",
            "data":{
                "name": "hosting Doc",
                "domains": ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                "path": "/docs/hosting",
            },
        },
        {
            "entry": "./docs/images/logo.png",
            "collection": "files",
            "document_id": "",
            "key": "src",
            "data":{
                "name": "hosting Doc",
                "domains": ["cocreate.app", "server.cocreate.app", "ws.cocreate.app"],
                "path": "/docs/images/logo.png",
            },
        }
    ],

	"extract": {
		"directory": "./src/",
		"extensions": [
			"js",
			"css",
			"html"
		],
		"ignores": [
			"node_modules",
			"vendor",
			"bower_components",
			"archive"
		]
	}
}

