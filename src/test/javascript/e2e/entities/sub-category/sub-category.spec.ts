import { browser, ExpectedConditions as ec, promise } from 'protractor';
import { NavBarPage, SignInPage } from '../../page-objects/jhi-page-objects';

import { SubCategoryComponentsPage, SubCategoryDeleteDialog, SubCategoryUpdatePage } from './sub-category.page-object';

const expect = chai.expect;

describe('SubCategory e2e test', () => {
  let navBarPage: NavBarPage;
  let signInPage: SignInPage;
  let subCategoryComponentsPage: SubCategoryComponentsPage;
  let subCategoryUpdatePage: SubCategoryUpdatePage;
  let subCategoryDeleteDialog: SubCategoryDeleteDialog;

  before(async () => {
    await browser.get('/');
    navBarPage = new NavBarPage();
    signInPage = await navBarPage.getSignInPage();
    await signInPage.autoSignInUsing('admin', 'admin');
    await browser.wait(ec.visibilityOf(navBarPage.entityMenu), 5000);
  });

  it('should load SubCategories', async () => {
    await navBarPage.goToEntity('sub-category');
    subCategoryComponentsPage = new SubCategoryComponentsPage();
    await browser.wait(ec.visibilityOf(subCategoryComponentsPage.title), 5000);
    expect(await subCategoryComponentsPage.getTitle()).to.eq('jhipsterTestApp.subCategory.home.title');
    await browser.wait(
      ec.or(ec.visibilityOf(subCategoryComponentsPage.entities), ec.visibilityOf(subCategoryComponentsPage.noResult)),
      1000
    );
  });

  it('should load create SubCategory page', async () => {
    await subCategoryComponentsPage.clickOnCreateButton();
    subCategoryUpdatePage = new SubCategoryUpdatePage();
    expect(await subCategoryUpdatePage.getPageTitle()).to.eq('jhipsterTestApp.subCategory.home.createOrEditLabel');
    await subCategoryUpdatePage.cancel();
  });

  it('should create and save SubCategories', async () => {
    const nbButtonsBeforeCreate = await subCategoryComponentsPage.countDeleteButtons();

    await subCategoryComponentsPage.clickOnCreateButton();

    await promise.all([
      subCategoryUpdatePage.setDescriptionInput('description'),
      subCategoryUpdatePage.setSortOrderInput('5'),
      subCategoryUpdatePage.setDateAddedInput('2000-12-31'),
      subCategoryUpdatePage.setDateModifiedInput('2000-12-31'),
      subCategoryUpdatePage.categorySelectLastOption(),
    ]);

    expect(await subCategoryUpdatePage.getDescriptionInput()).to.eq(
      'description',
      'Expected Description value to be equals to description'
    );
    expect(await subCategoryUpdatePage.getSortOrderInput()).to.eq('5', 'Expected sortOrder value to be equals to 5');
    expect(await subCategoryUpdatePage.getDateAddedInput()).to.eq('2000-12-31', 'Expected dateAdded value to be equals to 2000-12-31');
    expect(await subCategoryUpdatePage.getDateModifiedInput()).to.eq(
      '2000-12-31',
      'Expected dateModified value to be equals to 2000-12-31'
    );

    await subCategoryUpdatePage.save();
    expect(await subCategoryUpdatePage.getSaveButton().isPresent(), 'Expected save button disappear').to.be.false;

    expect(await subCategoryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeCreate + 1, 'Expected one more entry in the table');
  });

  it('should delete last SubCategory', async () => {
    const nbButtonsBeforeDelete = await subCategoryComponentsPage.countDeleteButtons();
    await subCategoryComponentsPage.clickOnLastDeleteButton();

    subCategoryDeleteDialog = new SubCategoryDeleteDialog();
    expect(await subCategoryDeleteDialog.getDialogTitle()).to.eq('jhipsterTestApp.subCategory.delete.question');
    await subCategoryDeleteDialog.clickOnConfirmButton();

    expect(await subCategoryComponentsPage.countDeleteButtons()).to.eq(nbButtonsBeforeDelete - 1);
  });

  after(async () => {
    await navBarPage.autoSignOut();
  });
});
