import { element, by, ElementFinder } from 'protractor';

export class SubCategoryComponentsPage {
  createButton = element(by.id('jh-create-entity'));
  deleteButtons = element.all(by.css('jhi-sub-category div table .btn-danger'));
  title = element.all(by.css('jhi-sub-category div h2#page-heading span')).first();
  noResult = element(by.id('no-result'));
  entities = element(by.id('entities'));

  async clickOnCreateButton(): Promise<void> {
    await this.createButton.click();
  }

  async clickOnLastDeleteButton(): Promise<void> {
    await this.deleteButtons.last().click();
  }

  async countDeleteButtons(): Promise<number> {
    return this.deleteButtons.count();
  }

  async getTitle(): Promise<string> {
    return this.title.getAttribute('jhiTranslate');
  }
}

export class SubCategoryUpdatePage {
  pageTitle = element(by.id('jhi-sub-category-heading'));
  saveButton = element(by.id('save-entity'));
  cancelButton = element(by.id('cancel-save'));

  descriptionInput = element(by.id('field_description'));
  sortOrderInput = element(by.id('field_sortOrder'));
  dateAddedInput = element(by.id('field_dateAdded'));
  dateModifiedInput = element(by.id('field_dateModified'));

  categorySelect = element(by.id('field_category'));

  async getPageTitle(): Promise<string> {
    return this.pageTitle.getAttribute('jhiTranslate');
  }

  async setDescriptionInput(description: string): Promise<void> {
    await this.descriptionInput.sendKeys(description);
  }

  async getDescriptionInput(): Promise<string> {
    return await this.descriptionInput.getAttribute('value');
  }

  async setSortOrderInput(sortOrder: string): Promise<void> {
    await this.sortOrderInput.sendKeys(sortOrder);
  }

  async getSortOrderInput(): Promise<string> {
    return await this.sortOrderInput.getAttribute('value');
  }

  async setDateAddedInput(dateAdded: string): Promise<void> {
    await this.dateAddedInput.sendKeys(dateAdded);
  }

  async getDateAddedInput(): Promise<string> {
    return await this.dateAddedInput.getAttribute('value');
  }

  async setDateModifiedInput(dateModified: string): Promise<void> {
    await this.dateModifiedInput.sendKeys(dateModified);
  }

  async getDateModifiedInput(): Promise<string> {
    return await this.dateModifiedInput.getAttribute('value');
  }

  async categorySelectLastOption(): Promise<void> {
    await this.categorySelect.all(by.tagName('option')).last().click();
  }

  async categorySelectOption(option: string): Promise<void> {
    await this.categorySelect.sendKeys(option);
  }

  getCategorySelect(): ElementFinder {
    return this.categorySelect;
  }

  async getCategorySelectedOption(): Promise<string> {
    return await this.categorySelect.element(by.css('option:checked')).getText();
  }

  async save(): Promise<void> {
    await this.saveButton.click();
  }

  async cancel(): Promise<void> {
    await this.cancelButton.click();
  }

  getSaveButton(): ElementFinder {
    return this.saveButton;
  }
}

export class SubCategoryDeleteDialog {
  private dialogTitle = element(by.id('jhi-delete-subCategory-heading'));
  private confirmButton = element(by.id('jhi-confirm-delete-subCategory'));

  async getDialogTitle(): Promise<string> {
    return this.dialogTitle.getAttribute('jhiTranslate');
  }

  async clickOnConfirmButton(): Promise<void> {
    await this.confirmButton.click();
  }
}
