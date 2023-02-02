#import "SampleNativeDatepickerClassicModule.h"

#import "SampleNativeDatepickerClassicModuleImpl.h"

#import <React/RCTConvert.h>

#if RCT_NEW_ARCH_ENABLED
/**
 * Import header file with codegenerated protocols based on the JS specification
 *
 * The name of the header matches the name provided in codegenConfig's `name` field in package.json
 */
#import "SampleNativeDatepickerClassic.h"

// Each turbo module extends codegenerated spec class
@interface SampleNativeDatepickerClassicModule () <NativeSampleNativeDatepickerClassicModuleSpec>
@end
#endif

@interface SampleNativeDatepickerClassicModule () <SampleNativeDatepickerClassicModuleDelegate>
@end

// Declare the ObjC implementation for that native module class
@implementation SampleNativeDatepickerClassicModule {
    SampleNativeDatepickerClassicModuleImpl *moduleImpl;
    RCTResponseSenderBlock callbackBlock;
    RCTPromiseResolveBlock resolveBlock;
    RCTPromiseRejectBlock rejectBlock;
}

// Return the name of the module - it should match the name provided in JS specification
RCT_EXPORT_MODULE(SampleNativeDatepickerClassicModule)

- (instancetype)init {
  self = [super init];
  if (self) {
    moduleImpl = [SampleNativeDatepickerClassicModuleImpl new];
    moduleImpl.delegate = self;
  }
  return self;
}

// Declare if module should be initialized on the main queue
+ (BOOL)requiresMainQueueSetup
{
  return YES;
}

/**
 * If the module interacts with UIKit,
 * it can declare that its methods should be run on main queue
 */
- (dispatch_queue_t)methodQueue {
  return dispatch_get_main_queue();
}

// Exported methods are overriden - based on the spec class
RCT_EXPORT_METHOD(showRangeDatepickerWithCallback:(NSString *)title
                                         onResult:(RCTResponseSenderBlock)onResult)
{
    if (callbackBlock != nil) {
        return;
    }
    callbackBlock = onResult;
    [moduleImpl showRangeDatepickerWithTitle:title];
}

RCT_EXPORT_METHOD(showRangeDatepickerWithPromise:(JS::NativeSampleNativeDatepickerClassicModule::SpecShowRangeDatepickerWithPromiseConfig &)config
                                         resolve:(RCTPromiseResolveBlock)resolve
                                          reject:(RCTPromiseRejectBlock)reject)
{
    if (resolveBlock != nil) {
        return;
    }
    resolveBlock = resolve;
    rejectBlock = reject;
    [moduleImpl showRangeDatepickerWithTitle:config.title()];
}

- (void)onCancel
{
    if (callbackBlock != nil) {
        callbackBlock(nil);
        callbackBlock = nil;
    } else if (resolveBlock != nil) {
        resolveBlock(nil);
        resolveBlock = nil;
        rejectBlock = nil;
    }
}

- (void)onError:(NSError *)error
{
    if (callbackBlock != nil) {
        callbackBlock(nil);
        callbackBlock = nil;
    } else if (resolveBlock != nil) {
        rejectBlock(@"noVCErrorCode", [error localizedDescription], error);
        resolveBlock = nil;
        rejectBlock = nil;
    }
}

- (void)onResult:(NSDictionary *)resultDictionary
{
    if (callbackBlock != nil) {
        callbackBlock(@[resultDictionary]);
        callbackBlock = nil;
    } else if (resolveBlock != nil) {
        resolveBlock(resultDictionary);
        resolveBlock = nil;
        rejectBlock = nil;
    }
}

#if RCT_NEW_ARCH_ENABLED
// Implement RCTTurboModule protocol
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeSampleNativeDatepickerClassicModuleSpecJSI>(params);
}
#endif

@end