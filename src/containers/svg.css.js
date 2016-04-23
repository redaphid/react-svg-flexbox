export default {
  'main-group': {
    flex: 1,

    flexDirection: 'column'
  },
  'the-circle': {
    flex: 1
  },

  'background-rect' : {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0
  },

  text: {
  },

  'big-rect': {
    minHeight: 20,
    margin: 10,
    flex: 3
  },

  'small-rect': {
    minHeight: 10,
    flex: 1
  },

  'column-group': {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  'center-text': {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 5
  },

  'row-group': {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: 'center'
  },

  group2: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  group: {
    flexDirection: 'row',
    flex: 1,
    minHeight: 100,
    minWidth: 10,
    alignItems: 'center',
    justifyContent: 'space-around'
  }
}
