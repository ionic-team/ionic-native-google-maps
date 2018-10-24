/**
 * We copied BaseClass and BaseArray class because they are
 * used by every class. I'm not sure in which ways they are using
 * but it is simpler than mocking them.
 *
 * If we have good enough test coverage for the real classes we should be able
 * to tell when behavior changes
 */
module.exports = {
  BaseClass: require('./BaseClass'),
  BaseArrayClass: require('./BaseArrayClass'),
};
