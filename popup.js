const restoreOptions = () => {
  chrome.storage.sync.get({ API_KEY: 'NO_KEY' }, function (result) {
    alert('TU API KEY ES: ' + result.API_KEY);
  });
};

restoreOptions();
