export default (args) => args.split('.').reduceRight((prev, curr) => ({ [curr]: prev }), null);
