var network;
    function focusRandom(idnum) {
      var nodeId = idnum;
      var options = {
        scale: 0.2,
        offset: {x:0,y:0},
        animation: {
          duration: 1000,
          easingFunction: "easeInOutQuad"
        }
      };
      console.log('Focusing on node: ' + nodeId);
      console.log('Node: ' + nodeId + ' in focus.');
      network.focus(nodeId, options);
    }

    function fitAnimated() {
      var options = {offset: {x:0,y:0},
        duration: 900,
        easingFunction: "easeInOutQuad"
      };
      console.log('Doing fit() Animation.');
      console.log('Animation finished.');
      network.fit({animation:options});
    }

    function redrawAll() {
      // remove positoins
      // for (var i = 0; i < nodes.length; i++) {
      //   delete nodes[i].x;
      //   delete nodes[i].y;
      // }

      // create a network

      var container = document.getElementById('mynetwork');
      var data = {
        nodes: nodes,
        edges: edges
      };
      var options = {
        nodes: {
          shape: 'circularImage',
          scaling: {
            min: 10,
            max: 30
          },
          font: {
            size: 12,
            face: 'Tahoma'
          }
        },
        edges: {
          width: 0.15,
          color: { inherit: 'from' },
          smooth: {
            type: 'continuous'
          }
        },
        physics: {
          stabilization: {
            iterations: 1200
          },
          barnesHut: {
            gravitationalConstant: -100000,
            springConstant: 0.001,
            springLength: 200
          }
        },
        interaction: {
          tooltipDelay: 200,
          hideEdgesOnDrag: false,
          hover: true
        }
      };

      // Note: data is coming from ./datasources/WorldCup2014.js
      network = new vis.Network(container, data, options);
    }

    redrawAll()