try {
    require('./docsData.js');
    console.log('Syntax OK');
} catch (e) {
    console.error('Syntax Error:', e);
    process.exit(1);
}
